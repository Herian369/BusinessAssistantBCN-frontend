import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment.prod';
import { Observable } from "rxjs";
import { ZoneModel } from "../models/common/zone.model";


@Injectable({
  providedIn: 'root'
})

export class LargeStablishmentsService {


  constructor(private router:Router,
              private http: HttpClient) {
  }

  getZoneBySearch(term: string): Observable<any> {
    return this.http.get(`${environment.BACKEND_BASE_URL}/${environment.BACKEND_LARGE_STABLISHMENTS_DISTRICT_URL}/${term}`);
  }

  getActivityBySearch(term: string): Observable<any> {
    return this.http.get(`${environment.BACKEND_BASE_URL}/${environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITY_URL}/${term}`);

  }

}
