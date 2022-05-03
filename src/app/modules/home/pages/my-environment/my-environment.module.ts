import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyEnvironmentSearchDetailPageComponent } from './pages/my-environment-search-detail-page/my-environment-search-detail-page.component';
import { BigMallsPageComponent } from './pages/big-malls-page/big-malls-page.component';
import { CommercialGalleriesPageComponent } from './pages/commercial-galleries-page/commercial-galleries-page.component';
import { LargeStablishmentsPageComponent } from './pages/large-stablishments-page/large-stablishments-page.component';
import { MarketFairsPageComponent } from './pages/market-fairs-page/market-fairs-page.component';
import { MunicipalMarketsPageComponent } from './pages/municipal-markets-page/municipal-markets-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyEnvironmentPageComponent } from './my-environment-page/my-environment-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyEnvironmentPageComponent,
    MyEnvironmentSearchDetailPageComponent,
    BigMallsPageComponent,
    CommercialGalleriesPageComponent,
    LargeStablishmentsPageComponent,
    MarketFairsPageComponent,
    MunicipalMarketsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class MyEnvironmentPageModule { }
