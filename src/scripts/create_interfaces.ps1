# Configuration

$dbname = 'pignusdb'

$user = 'postgres'

$pass = '1234'

$modelPath = "../models"

$providerPath = "../providers"

# Class

class Database {

  [Object[]]$tables
  [string]$dbname
  [string]$user
  [string]$password
  [string]$modelPath
  [string]$providerPath

  [string]$queryTables = "SELECT row_to_json(row(table_name))
        FROM information_schema.tables
        WHERE table_schema='public'
        AND table_type='BASE TABLE'
        AND table_name not in ('ar_internal_metadata','schema_migrations');"

  Database([string]$dbname,
           [string]$user,
           [string]$pass,
           [string]$modelPath,
           [string]$providerPath)
  {
    $this.dbname = $dbname
    $this.user = $user
    $this.password = $pass
    $this.modelPath = $modelPath
    $this.providerPath = $providerPath
    $this.tables = $this.getTables()
  }

  [string]getQueryAttributes($table)
  {
    return "
      SELECT row_to_json(row(column_name, data_type, is_nullable))
      FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name   = '$($table)'
    "
  }

  [string]Titelize($name)
  {
      $palabras = $name.Split('_') |
                     ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_)}

      return $palabras -join ''
  }

  [Object[]]parseJson($result)
  {
    return "[$($result[2..($result.Length-3)] -join ',')]" |
                    ConvertFrom-Json | Where-Object {$_}
  }

  [Object[]]getTables()
  {

    Set-Item -Path Env:PGPASSWORD -Value $this.password

    $result = psql -U $this.user -d $this.dbname -c $this.queryTables

    $result = $this.parseJson($result)

    $result = $result.f1

    return $result

  }

  [Object[]]getColumns($table)
  {
    Set-Item -Path Env:PGPASSWORD -Value $this.password

    $result = psql -U $this.user -d $this.dbname -c $this.getQueryAttributes($table)

    $result = $this.parseJson($result)

    return $result

  }

  [Object[]]getAttributes()
  {
    $attributes = @()

    foreach($table in $this.tables)
    {
      $properties = @{
        'entity' = $this.Titelize($table);
        'columns' = $this.getColumns($table)
      }
      $attributes += New-Object -TypeName psobject -Property $properties

    }

    return $attributes
  }

  [String]toSnake($words)
  {
    return $($words -csplit '(?=[A-Z])' -ne '' -join '-').toLower()
  }

  createInterfaces()
  {

    $interfaces = $this.getAttributes()

    if(-Not (Test-Path $this.modelPath))
    {
      New-Item -Path $this.modelPath -ItemType Directory
    }
    else {
      Remove-Item -Path "$($this.modelPath)/*" -Force
    }

    foreach($interface in $interfaces)
    {

      $entitySnake = $($this.toSnake($interface.entity))

      if(-Not (Test-Path "$($this.providerPath)/$entitySnake/$entitySnake.ts"))
      {
        ionic g provider $interface.entity
      }

      New-Item -Path "$($this.modelPath)/$($interface.entity).ts" -ItemType File -Force

      $attributes = @()

      foreach($column in $interface.columns) {

        if($column.f3 -eq 'YES' -or
           $column.f1 -In @('id', 'created_at', 'updated_at')){

          Write-Host $column.f1
          $attribute = "$($column.f1)?:"
        }
        else
        {
          $attribute = "$($column.f1):"
        }

        if($column.f2 -like "*char*" -or
           $column.f2 -like "*date*" -or
           $column.f2 -like "*time*")
        {
          $attribute = "$attribute string; "
        }
        elseif ($column.f2 -like "*int*") {
          $attribute = "$attribute number; "
        }
        else
        {
          $attribute = "$attribute any; "
        }

        $attributes += $attribute
      }

      "export interface $($interface.entity)
      {
        $attributes
      }
      " | out-file "../models/$($interface.entity).ts"
    }
  }
}


#Main

$db = [Database]::new($dbname,$user,$pass,$modelPath,$providerPath)

$db.createInterfaces()

