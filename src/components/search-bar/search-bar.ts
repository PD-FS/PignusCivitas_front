import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchBarImplementComponent } from '../search-bar-implement/search-bar-implement';

/**
 * Generated class for the SearchBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.html'
})
export class SearchBarComponent {

  public searchInput: string;

  public showSearchBar: boolean = false;

  constructor(public dialog: MatDialog) {
  }

  public search(event: any) {

  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(SearchBarImplementComponent, {
      width: '100%',
      data: {}
    });
    this.showSearchBar = true;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public cancelSearch(event: any) {

  }

}
