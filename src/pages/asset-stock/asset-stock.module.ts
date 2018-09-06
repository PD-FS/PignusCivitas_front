import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssetStockPage } from './asset-stock';

@NgModule({
  declarations: [
    AssetStockPage,
  ],
  imports: [
    IonicPageModule.forChild(AssetStockPage),
  ],
})
export class AssetStockPageModule {}
