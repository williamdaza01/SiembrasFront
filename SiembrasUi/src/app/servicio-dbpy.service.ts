import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioDbpyService {
  readonly APIurl = "http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  getMunicipiosList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/municipios');
  }

  getArbolesList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/arboles');
  }

  getVeredasList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/veredas');
  }

  getContratistasList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/contratistas');
  }

  getSiembrasList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/siembras');
  }

  postSiembrasList(val:any):Observable<any[]> {
    return this.http.post<any[]>(this.APIurl + 'siembras/',val);
  }

  putSiembrasList(val:any):Observable<any[]> {
    console.log(val);
    
    return this.http.put<any[]>(this.APIurl + 'siembras/', val);
  }

  deleteSiembrasList(val:any):Observable<any[]> {
    return this.http.delete<any[]>(this.APIurl + '/siembras' + val);
  }
}
