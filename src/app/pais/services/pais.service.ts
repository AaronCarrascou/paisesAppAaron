import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  apiUrl:string='https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  buscarPais(termino:string):Observable<Pais[]>{
    return this.http.get<Pais[]>(this.apiUrl+'/name/'+termino);
  }
  buscarPaisPorCapital(termino:string):Observable<Pais[]>{
    return this.http.get<Pais[]>(this.apiUrl+'/capital/'+termino);
  }
  buscarPaisPorCodigo(id:string):Observable<Pais>{
    return this.http.get<Pais>(this.apiUrl+'/alpha/'+id);
  }

  buscarPaisPorRegion(region:string):Observable<Pais[]>{
    return this.http.get<Pais[]>('https://restcountries.com/v3.1/region/'+region);
  }
}
