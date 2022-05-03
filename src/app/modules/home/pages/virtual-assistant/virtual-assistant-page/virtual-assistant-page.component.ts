import { Component } from '@angular/core';
import { VirtualAssistantAccordionComponent } from '../components/virtual-assistant-accordion/virtual-assistant-accordion.component';

@Component({
  selector: 'app-virtual-assistant-page',
  templateUrl: './virtual-assistant-page.component.html',
  styleUrls: ['./virtual-assistant-page.component.css'],
  providers: [VirtualAssistantAccordionComponent]
})
export class VirtualAssistantPageComponent{

  dataSend: any[] = []

  constructor(private dataAccordion: VirtualAssistantAccordionComponent){
    this.dataSend = this.dataAccordion.dataSend   
  }
  

  

}
