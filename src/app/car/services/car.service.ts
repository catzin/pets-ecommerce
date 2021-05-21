import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarResponse } from '../../productos/interfaces/car.interface';
import { Observable } from 'rxjs';
import { deleteResponse } from '../../productos/interfaces/deleteResponse.interface';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }


carritoItems():Observable<CarResponse[]>{

    const url = "http://localhost:4000/shop/carritoItems";
    const headers = new HttpHeaders()
                    .set('x-token',localStorage.getItem('x-token') || '');

    return this.http.post<CarResponse[]>(url,null,{headers});

  }



 eliminarItems(idalimento:number,idinv:number):Observable<deleteResponse>{

    const url = "http://localhost:4000/shop/eliminarItem";
    const body = {idalimento,idinv};
    const headers = new HttpHeaders()
                    .set('x-token',localStorage.getItem('x-token') || '');
    
    return this.http.post<deleteResponse>(url,body,{headers});
    

  }

  comprar(total:number):Observable<any>{


    const url = "http://localhost:4000/shop/nuevaOrden";
    const body = {total};
    const headers = new HttpHeaders()
                    .set('x-token',localStorage.getItem('x-token') || '');
    
    return this.http.post<any>(url,body,{headers});

  }




 
}