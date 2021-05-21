import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { ProductosService } from '../../productos.service';
import { ProductResponse } from '../../interfaces/productResponse.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

 

    productos:ProductResponse[] = []
    tipo!:string;
    constructor(
    private activateRoute:ActivatedRoute,
    private productosservice:ProductosService) { }

   ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap((param) => this.productosservice.obtenerProductosByTipo(param.tipo,param.marc))
    )
    .subscribe(
      resp =>{
       this.productos = resp;
       //console.log(this.productos);
      }
    )


}
}
