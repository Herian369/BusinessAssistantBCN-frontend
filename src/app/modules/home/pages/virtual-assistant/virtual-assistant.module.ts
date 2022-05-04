import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { VirtualAssistantAccordionComponent } from './components/virtual-assistant-accordion/virtual-assistant-accordion.component';
import { VirtualAssistantDataSaveComponent } from './components/virtual-assistant-data-save/virtual-assistant-data-save.component';
import { VirtualAssistantPageComponent } from './virtual-assistant-page/virtual-assistant-page.component';
//Angular Material
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    VirtualAssistantDataSaveComponent,
    VirtualAssistantPageComponent,
    VirtualAssistantAccordionComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    SharedModule,
    RouterModule
  ]
})
export class VirtualAssistantModule { }
