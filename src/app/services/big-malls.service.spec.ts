import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ZoneModel } from "../models/common/zone.model";
import { BigMallsService } from "./big-malls.service";

describe ('BigMallsService', () => {
  
  let service: BigMallsService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers:[
        BigMallsService
      ]
    }).compileComponents();
    
    service = TestBed.inject(BigMallsService)
  });

  it('should be created',()=>{
    expect(service).toBeDefined()
    expect(service).toBeInstanceOf(BigMallsService)
  });

  it('#zoneSelected should return "[]" as default',()=>{
    expect(service.zoneSelected).toBeTruthy();
    expect(service.zoneSelected).toEqual([]);
  });

  it('#activitiesSelected should return "[]" as default',()=>{
    expect(service.activitiesSelected).toBeTruthy();
    expect(service.activitiesSelected).toEqual([]);
  });

  it('#setZonesSelected should inicialice zoneSelected as default',()=>{
    let economicModel = {idActivity: 1, activityName: 'activity'}
    service.setActivitiesSelected([economicModel])

    expect(service.activitiesSelected).toEqual([economicModel]);

  });

  
});
