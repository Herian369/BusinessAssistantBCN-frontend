import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { EconomicActivityModel } from "../models/common/economic-activity.model";
import { ZoneModel } from "../models/common/zone.model";
import { BigMallsService } from "./big-malls.service";

describe ('BigMallsService', () => {
  let httpSpy: {get:jasmine.Spy}
  let service: BigMallsService

  beforeEach(() => { 
    httpSpy = jasmine.createSpyObj('HttpClient', ['get'])

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers:[
        BigMallsService,
        {provide: HttpClient, useValue: httpSpy}
      ]
    });    
  });
  
  beforeEach(()=>{
    service = TestBed.inject(BigMallsService)    
  })
  

  it('should be created',()=>{
    expect(service).toBeTruthy()
  });

  it('_zonesSelected should be created', ()=>{
    expect(service['_zonesSelected']).toBeTruthy()
    expect(service['_zonesSelected']).toEqual([])
  })

  it('_activitiesSelected should be created', ()=>{
    expect(service['_activitiesSelected']).toBeTruthy()
    expect(service['_activitiesSelected']).toEqual([])
  })

  it('zoneSelected should return _zonesSelected',()=>{
    const zone = service['_zonesSelected']
    expect(service.zoneSelected).toEqual(zone);
  });

  it('activivitiesSelected should return _activitiesSelected',()=>{
    const activities = service['_activitiesSelected']
    expect(service.activitiesSelected).toEqual(activities);
  });

  it('#setZonesSelected should change zoneSelected',()=>{
    const zoneModel:ZoneModel[] = [{idZone: 1, zoneName: 'zone'}]
    service.setZonesSelected(zoneModel)
    expect(service.zoneSelected.length).toEqual(1)
  });
  
  it('#setActivitiesSelected should change activitiesSelected',()=>{
    const economicModel:EconomicActivityModel[] = [{idActivity: 34768, activityName: 'activity'}]
    service.setActivitiesSelected(economicModel)
    expect(service.activitiesSelected.length).toBe(1)
  });
  
  it('#getSelectedData should return the data of big-malls-fake-filtered', ()=>{
    
    service.getSelectedData().subscribe(data => {

    })

    
    

  })

  
});
