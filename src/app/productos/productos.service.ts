import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductResponse } from './interfaces/productResponse.interface';
import { verResponse } from './interfaces/verResponse.interface';
import { AddResponse } from './interfaces/addResponse.interface';
import { tap, map, catchError } from 'rxjs/operators';
import { CarResponse} from './interfaces/car.interface';
import { deleteResponse } from './interfaces/deleteResponse.interface';
import { ImgResponse } from './interfaces/imgResponse.interface';
import { marcaResponse } from './interfaces/marcaResponse.iterface';

interface existencia{
    existencia:number;

}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  
  obtenerProductosByTipo(mascota:string,marca:string):Observable<ProductResponse[]>{
    return this.http.get<ProductResponse[]>(`http://localhost:4000/shop/productos/${mascota}/${marca}`);
  }

  verProducto(mascota:string,marca:string,categoria:string,raza:string):Observable<verResponse>{
    return this.http.get<verResponse>(`http://localhost:4000/shop/ver-producto/${mascota}/${marca}/${categoria}/${raza}`);

  }


  verExistencia(idalimento:number , tamanio:string):Observable<existencia>{
    const url ="http://localhost:4000/shop/existencia";
    const body = {idalimento,tamanio};
    return this.http.post<existencia>(url,body);
  }


  obtenerImgs(m:string,ma:string,ca:string,raza:string):Observable<ImgResponse[]>{
    return this.http.get<ImgResponse[]>(`http://localhost:4000/shop/imgProducts/${m}/${ma}/${ca}/${raza}`);
  }


  addTocar(id:number,tam:number,canti:number,total:number){
    const url = "http://localhost:4000/shop/agregarAcarrito";
    const headers = new HttpHeaders()
                    .set('x-token',localStorage.getItem('x-token') || '')

    const body = {id,tam,canti,total};
    return this.http.post<AddResponse>(url,body,{headers});
          
  }


  getMarcas():Observable<marcaResponse[]>{
    return this.http.get<marcaResponse[]>(`http://localhost:4000/shop/marcas`);

    

  }



  

 
  


  
}