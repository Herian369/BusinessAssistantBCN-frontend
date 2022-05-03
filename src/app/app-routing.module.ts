import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./helpers/JwtInterceptor";
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { MyEnvironmentPageComponent } from './modules/home/pages/my-environment/my-environment-page/my-environment-page.component';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';
import { LargeStablishmentsPageComponent } from './modules/home/pages/my-environment/pages/large-stablishments-page/large-stablishments-page.component';
import { MyEnvironmentSearchDetailPageComponent } from './modules/home/pages/my-environment/pages/my-environment-search-detail-page/my-environment-search-detail-page.component';
import { CommercialGalleriesPageComponent } from './modules/home/pages/my-environment/pages/commercial-galleries-page/commercial-galleries-page.component';
import { BigMallsPageComponent } from './modules/home/pages/my-environment/pages/big-malls-page/big-malls-page.component';
import { MunicipalMarketsPageComponent } from './modules/home/pages/my-environment/pages/municipal-markets-page/municipal-markets-page.component';
import { MarketFairsPageComponent } from './modules/home/pages/my-environment/pages/market-fairs-page/market-fairs-page.component';
import { SavedSearchesComponent } from './modules/home/components/saved-searches/saved-searches.component';
import { VirtualAssistantPageComponent } from './modules/home/pages/virtual-assistant/virtual-assistant-page/virtual-assistant-page.component';


// FUNCIONA 
const routes: Routes = [
    { path: 'home', component: HomePageComponent, data: { breadcrumb: null } },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: "login", component: LoginFormComponent },
    { path: 'my-environment', component: MyEnvironmentPageComponent, data: { breadcrumb: 'my-enviroment' },
      children: [
      { path: 'large-stablishments', component: LargeStablishmentsPageComponent, data: { breadcrumb: 'big-stablish' },
        children: [
          { path: 'my-environment-search-detail', component: MyEnvironmentSearchDetailPageComponent, data: { breadcrumb: 'search' } },  
        ]},
      { path: "commercial-galleries", component: CommercialGalleriesPageComponent, data: { breadcrumb: 'gallery-market' } },
      { path: "big-malls", component: BigMallsPageComponent, data: { breadcrumb: 'mall' },
        children:[
          { path: 'my-environment-search-detail', component: MyEnvironmentSearchDetailPageComponent, data: { breadcrumb: 'search' } },          
        ]},
      { path: "municipal-markets", component: MunicipalMarketsPageComponent, data: { breadcrumb: 'public-market' },
        children: [
          { path: 'my-environment-search-detail', component: MyEnvironmentSearchDetailPageComponent, data: { breadcrumb: 'search' } },
        ]},
      { path: "market-fairs", component: MarketFairsPageComponent, data: { breadcrumb: 'market-fair' } },
      ]
    },
    { path: 'virtual-assistant', component: VirtualAssistantPageComponent, data: { breadcrumb: 'assistant' } },
    { path: "saved-searches", component: SavedSearchesComponent, data: { breadcrumb: 'save-results' } },
    { path: '**', component: HomePageComponent }
];



/*
const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomePageComponent },
  // { path: "login", component: LoginFormComponent },
  { path: "my-environment", component: MyEnvironmentPageComponent },
  { path: "virtual-assistant", component: VirtualAssistantPageComponent},
  { path: "large-stablishments", component: LargeStablishmentsPageComponent },
  { path: "commercial-galleries", component: CommercialGalleriesPageComponent },
  { path: "big-malls", component: BigMallsPageComponent },
  { path: "municipal-markets", component: MunicipalMarketsPageComponent },
  { path: "market-fairs", component: MarketFairsPageComponent },
  { path: "my-environment-search-detail", component: MyEnvironmentSearchDetailPageComponent },
  { path: "saved-searches", component: SavedSearchesComponent },

];*/

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
