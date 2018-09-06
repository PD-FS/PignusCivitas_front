import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssetStockDetailPage } from './asset-stock-detail';

@NgModule({
  declarations: [
    AssetStockDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AssetStockDetailPage),
  ],
})
export class AssetStockDetailPageModule {}
