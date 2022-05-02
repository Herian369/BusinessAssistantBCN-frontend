import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { environment } from "src/environments/environment";
import { EconomicActivityModel } from "../models/common/economic-activity.model";
import { ZoneModel } from "../models/common/zone.model";
import { BigMallsService } from "./big-malls.service";

describe ('BigMallsService', () => {
  let http: HttpTestingController
  let service: BigMallsService

  beforeEach(() => { 

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers:[
        BigMallsService,
        {provide: HttpClient}
      ]
    });    
  });
  
  beforeEach(()=>{
    service = TestBed.inject(BigMallsService)
    http = TestBed.inject(HttpTestingController) 
  })
  
  describe('BigMallsService should be created', ()=>{
    
    it('should be created',()=>{
      expect(service).toBeTruthy()
    });

  })


  describe('Variables should be inicialized', ()=>{
    
    it('_zonesSelected should be created', ()=>{
      expect(service['_zonesSelected']).toBeDefined()
      expect(service['_zonesSelected']).toBeTruthy()
      expect(service['_zonesSelected']).toEqual([])
    })

    it('_activitiesSelected should be created', ()=>{
      expect(service['_activitiesSelected']).toBeDefined()
      expect(service['_activitiesSelected']).toBeTruthy()
      expect(service['_activitiesSelected']).toEqual([])
    })

  })

  describe('Methods getters and setters should be created', ()=>{

    it('zoneSelected should return _zonesSelected',()=>{
      const zone = service['_zonesSelected']
      const serviceZone = service.zoneSelected
      expect(serviceZone).toEqual(zone);
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
  })


  describe('GET', ()=>{

    it('#getSelectedData should match request by matcher function', ()=>{
      
      const result = 'testing'

      service.getSelectedData().subscribe(data => {
        expect(data).toEqual(result),
        fail
      })
  
      const req = http.expectOne( req => req.url === `${environment.BACKEND_BASE_URL}${environment.BACKEND_BIG_MALLS_FAKE_FILTERED_RESULTS}`)

      expect(req.request.method).toBe('GET')
      expect(req.request.params.get('zones')).toBe('[]')
      expect(req.request.params.get('activities')).toBe('[]')

      req.flush(result)
      http.verify()

    })

  })

  

  
});
