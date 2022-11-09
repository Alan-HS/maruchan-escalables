import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';//Esto es para importar la libreria y así usar los observadores
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaruchanService {

  constructor(private http:HttpClient) { }

  public getDataFromBackend2():Observable<Object>{
    return this.http.get('http://localhost:8080/maruchans');
  }
}
