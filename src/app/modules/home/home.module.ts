import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { InformationNavComponent } from './components/information-nav/information-nav.component';
import { RouterModule } from '@angular/router';
import { SavedSearchesComponent } from './components/saved-searches/saved-searches.component';
import { MyEnvironmentPageModule } from './pages/my-environment/my-environment.module';
import { VirtualAssistantModule } from './pages/virtual-assistant/virtual-assistant.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    InformationNavComponent,
    SavedSearchesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MyEnvironmentPageModule,
    VirtualAssistantModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
