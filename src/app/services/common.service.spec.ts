import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { environment } from "src/environments/environment";
import { CommonService } from "./common.service";


describe ('CommonService', () => {

  let http: HttpTestingController;
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CommonService,
        {provide: HttpClient}
      ]
    })

    service = TestBed.inject(CommonService)
    http = TestBed.inject(HttpTestingController)

  });

  describe('CommonService should be created', ()=>{
    
    it('should be created',()=>{
      expect(service).toBeTruthy()
    });

  })

  describe('Variables should be inicialized', ()=>{
    
    it('largeStablishmentsClicked should be created',()=>{
      expect(service.largeStablishmentsClicked).toBeDefined()
      expect(service.largeStablishmentsClicked).toBeFalse()
    });
    it('municipalMarketsClicked should be created',()=>{
      expect(service.municipalMarketsClicked).toBeDefined()
      expect(service.municipalMarketsClicked).toBeFalse()
    });

  })
  describe('GET', ()=>{
    
    it('#getZones should add an Authorization header',()=>{
      let result = 'testing'
      
      service.getZones().subscribe(data => {
        expect(data).toEqual(result)
      })

      let req = http.expectOne( req => req.url === `${ environment.BACKEND_BASE_URL }${ environment.BACKEND_ZONES_URL }`)

      expect(req.request.method).toBe('GET')
      expect(req.request.headers.has('Content-Type')).toBe(true)
    });

    it('#getEconomicActivities should add an Authorization header',()=>{
      let result = 'testing'
      
      service.getEconomicActivities().subscribe(data => {
        expect(data).toEqual(result)
      })

      let req = http.expectOne( req => req.url === `${ environment.BACKEND_BASE_URL }${ environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL }`)

      expect(req.request.method).toBe('GET')
      expect(req.request.headers.has('Content-Type')).toBe(true)
    });
  })



});
