import { Component, Input, OnInit } from '@angular/core';
import { ProductResponse } from '../../interfaces/productResponse.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ProductosService } from '../../productos.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  @Input() producto!:ProductResponse;
  cantPedido :number = 1;
  
 

  constructor(private http:HttpClient, 
  private authservice:AuthService,
  private productoservice:ProductosService,
  private router:Router) { }

  ngOnInit(): void {


  }


  agregar(){

    this.productoservice.addTocar(this.producto.idalimento,this.producto.tamanio,this.cantPedido,this.producto.precio)
    .subscribe( resp =>{

       Swal.fire({
          position: 'center',
          icon: 'success',
          title: resp.msg,
          showConfirmButton: false,
          timer: 1500
          })
      
    }, err => {
      this.router.navigateByUrl('/auth')

    })

   
  }


  eliminar(){
    
  }



}
