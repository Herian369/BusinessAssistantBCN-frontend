
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

import { LargeStablishmentsService } from '../../../../../../services/large-stablishments.service';
import { CommonService } from "../../../../../../services/common.service";
import { ZoneModel } from "../../../../../../models/common/zone.model";
import { EconomicActivityModel } from 'src/app/models/common/economic-activity.model';
import { BreadcrumbService } from '../../../../../../services/breadcrumb.service';



@Component({
  selector: 'app-large-stablishments-page',
  templateUrl: './large-stablishments-page.component.html',
  styleUrls: ['./large-stablishments-page.component.css']
})
export class LargeStablishmentsPageComponent implements OnInit, OnDestroy {


  //Subscriptions
  zones$!: Subscription;
  activities$!: Subscription;
  largeStablishments$!: Subscription;

  //Other elements
  bcnZones: ZoneModel[] = [];
  largeStablishmentActivities: EconomicActivityModel[] = [];

  //Options checked
  // largeStablishmentActivitiesSelected: EconomicActivityModel [] = [];

  get breadcrumbs() {
    return this.breadcrumbService.breadcrumbs;
  }

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private largeStablishmentsService: LargeStablishmentsService,
    private commonservice: CommonService,
    private breadcrumbService: BreadcrumbService 
    ) { }

  ngOnInit(): void {
    this.loadMasterData();
    this.largeStablishmentsService.initializeSelected();
  }

  ngOnDestroy() {
    if (this.zones$ != undefined) this.zones$.unsubscribe();
  }

  loadMasterData() {
    this.zones$ = this.commonservice.getZones().subscribe(resp => {
      // console.log(resp);
      resp.results.forEach((element: any) => {
        const bcnZone: ZoneModel = new ZoneModel(element);
        this.bcnZones.push(bcnZone);
      });
    });
    this.activities$ = this.commonservice.getEconomicActivities().subscribe(resp => {
      // console.log(resp);
      resp.results.forEach((element: any) => {
        const largeStablishmentActivity: EconomicActivityModel = new EconomicActivityModel(element);
        this.largeStablishmentActivities.push(largeStablishmentActivity);
      });
    });
  }

  largeStablishmentZonesSelected(zoneSelected: ZoneModel, event: any) {
    if (event.checked) {
      this.largeStablishmentsService.addZonesSelected(zoneSelected);
    } else {
      this.largeStablishmentsService.deleteZoneSelected(zoneSelected);
    }
  }

  largeStablishmentActivitySelected(activitySelected: EconomicActivityModel, event: any) {
    if (event.checked) {
      this.largeStablishmentsService.addActivitiesSelected(activitySelected)
    } else {
      this.largeStablishmentsService.deleteActivitySelected(activitySelected)
    }
  }



  largeStablishmentSearch() {
    // this.largeStablishments$ =
    this.commonservice.largeStablishmentsClicked=true;
    this.largeStablishmentsService.sendSelectedData()
      .subscribe((resp: any) => {
        console.log("largeStablishmentSearch RESPONSE: ",resp)
      });

  }

  largeStablishmentActivitySearch() {
    console.log(this.largeStablishmentActivities);
  }
}


