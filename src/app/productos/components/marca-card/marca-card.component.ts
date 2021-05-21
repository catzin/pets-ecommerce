import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { ProductosService } from '../../productos.service';
import { ProductResponse } from '../../interfaces/productResponse.interface';
import { marcaResponse } from '../../interfaces/marcaResponse.iterface';

@Component({
  selector: 'app-marca-card',
  templateUrl: './marca-card.component.html',
  styleUrls: ['./marca-card.component.css']
})
export class MarcaCardComponent implements OnInit {


  mascota!:string;
  //marca!:string;

  marcas:marcaResponse[] = [];

  constructor(private productoservice:ProductosService,
  private activatedRoute:ActivatedRoute,
  private router:ActivatedRoute) { }

  

  ngOnInit(): void {
 
    this.activatedRoute.params.subscribe(
      (params:Params ) =>{
        this.mascota = params.tipo;
        

      }
    )

    this.productoservice.getMarcas()
    .subscribe(resp =>{
      this.marcas = resp;
    })
    
  }

}
