import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { user } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service'
import {CarResponse } from 'src/app/productos/interfaces/car.interface';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-car-pag',
  templateUrl: './car-pag.component.html',
  styleUrls: ['./car-pag.component.css']
})

export class CarPagComponent implements OnInit {  

  data:CarResponse[] = []
  delete!:CarResponse;
  total:number = 0;
  band:boolean = false;

  usuario!:user;

  constructor(private authservice:AuthService,
  private cars:CarService,
  private router:Router) { }

  ngOnInit(): void {

    this.getItemsCarrito();

  }


  comprar(){
    this.cars.comprar(this.total).subscribe(resp => console.log(resp));
    
  
  }

  getItemsCarrito(){

    this.cars.carritoItems().subscribe(resp =>{
     
      this.data = resp;
 
      this.data.forEach(i =>{ this.total = this.total + i.total});
      if(this.total != 0){ this.band = true; }
    })
  
   
  }

  eliminarItem(item:CarResponse){
    this.cars.eliminarItems(item.idalimento,item.inventario_idinventario)
    .subscribe(resp =>{
      this.total = 0;
      this.getItemsCarrito();
    })
     

  
  }
 
}