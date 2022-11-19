import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';//Esto es para importar la libreria y así usar los observadores
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Maruchan } from './maruchan';

@Injectable({
  providedIn: 'root'
})
export class MaruchanService {

  // private url = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  public getDataFromBackend():Observable<any>{
    // return this.http.get('http://localhost:8080/maruchans');
    return this.http.get('http://localhost:8080/obtener');
  }

  public agregar_mar(maruchan:Maruchan):Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(maruchan);
    return this.http.post('http://localhost:8080/agregar',body,{'headers':headers});
  }
  public borrar_mar(maruchan:Maruchan):Observable<any>{
    // const headers = { 'content-type': 'application/json'};
    // const body=JSON.stringify(maruchan);
    // return this.http.delete('http://localhost:8080/eliminar',body,{'headers':headers});
    return this.http.delete('http://localhost:8080/'+maruchan._id);
  }

  public actualizar_mar(maruchan:Maruchan):Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(maruchan);
    // return this.http.delete('http://localhost:8080/eliminar',body,{'headers':headers});
    return this.http.put('http://localhost:8080/actualizar',body,{'headers':headers});
  }
}
