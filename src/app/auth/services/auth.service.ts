import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { user } from '../../car/interfaces/user.interface';
import { codResponse } from '../interfaces/codeResponse.interface';
import { FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario!:Usuario;

  constructor(private http:HttpClient) { }

  getUsuario(){
    return {...this._usuario};
  }

  login(email:string , password:string){

    const url = "http://localhost:4000/auth/login";
    const body = {email,password};

    return this.http.post<AuthResponse>(url,body).pipe(
      tap(resp =>{
        if(resp.ok){
          localStorage.setItem('x-token',resp.token!);
          this._usuario = {
            nombre:resp.nombre!,
            id:resp.id!
          }
        }
      }),
      map(resp => resp.ok),
      catchError(err  => of(err.error.msg))
    );

  }

    validarToken():Observable <user>{

    const headers = new HttpHeaders().set('x-token',localStorage.getItem('x-token') || '');

    return this.http.get<user>('http://localhost:4000/auth/validar',{headers});
   
  }

  registrar(nombre:string,appaterno:string,apmaterno:string,email:string,password:string){
    const url =  "http://localhost:4000/auth/registro";

    const body = {nombre,appaterno,apmaterno,email,password};

    return this.http.post<AuthResponse>(url,body).pipe(
      tap(resp =>{
        if(resp.ok){
          localStorage.setItem('x-token',resp.token!);
          this._usuario = {
            nombre:resp.nombre!,
            id:resp.id!
          }
        }
      }),
      map(resp => resp.ok),
      catchError(err => of(err.error.msg))
    )

  }


  getDataCode(codigo:number):Observable<codResponse>{

    return this.http.get<codResponse>(`http://localhost:4000/auth/codeInfo/${codigo}`);

  }

  registarInformacion(data:FormGroup):Observable<any>{

    const {calle,exterior,interior,ref,tel,codigo,municipio,colonia,estado,ciudad} = data.value;
    const body = {calle,exterior,interior,ref,tel,codigo,municipio,colonia,estado,ciudad };
    const url = "http://localhost:4000/shop/registrarDireccion";
    const headers = new HttpHeaders().set('x-token',localStorage.getItem('x-token') || '');

    return this.http.post<any>(url,body,{headers});

   

  }


  cerrarSesion(){
    localStorage.clear();
  }
}


