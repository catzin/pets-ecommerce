import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap, catchError, map } from 'rxjs/operators';
import { ProductosService } from '../../productos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { ImgResponse } from '../../interfaces/imgResponse.interface';
import { alimento, Imag, verResponse } from '../../interfaces/verResponse.interface';


@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {

  descripcion !:string;
  mascota!:string;
  marca!:string;
  categoria!:string;
  raza!:string;
  precio !:number;
  ide!:number;
  total:number = 0;
  data!:verResponse;
  imgs:Imag[] = [];
  alimentos:alimento[] = [];
  bandCanti:boolean = true;
  cantidad : number[] = [];
  bande:boolean = false;

  miForm:FormGroup = this.fb.group({

    tamanio: ['',[Validators.required]],
    canti: ['',[Validators.required]]

  });

  constructor(

    private activatedRoute:ActivatedRoute,
    private productosservice:ProductosService,
    private fb:FormBuilder,
    private router:Router) { }

  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      ({mascota,marca,categoria,raza}) =>{ 
        this.mascota = mascota; this.marca = marca,this.categoria = categoria,this.raza = raza;
      }
    )

    this.obtenerAlimentos();


    this.miForm.get('tamanio')?.valueChanges
    .pipe(

      tap((_) => {this.miForm.get('canti')?.reset(''); }),

      tap((_) => {
        
        this.cantidad = [];
      }),
        tap(tamanio => {
        this.total = 0;
        this.miForm.get('canti')?.valueChanges.subscribe( cantidad =>{

          this.alimentos.forEach(item =>{
            if(item.tamanio == tamanio){
              this.total = item.precio * cantidad;
            }
          })
        })
      }),
      switchMap(tamanio => this.productosservice.verExistencia(this.ide,tamanio))
    )
    
    .subscribe(tamanios => {

      if(tamanios.existencia <= 0){ this.bandCanti = false; }
      else{
         this.llenarCantidad(tamanios.existencia);
      }

     
      
    })

  }


llenarCantidad(tope:number){

  for(let i:number=1;i <= tope; i++){
    this.cantidad.push(i);
  }



}

 obtenerAlimentos(){

    this.activatedRoute.params
    
     .pipe(
      switchMap((param) => this.productosservice.verProducto(param.mascota,param.marca,param.categoria,param.raza))
    )
    .subscribe(resp =>{
    
      this.imgs = resp.imags;
      this.alimentos = resp.data;
      this.ide = this.alimentos[0].idalimento;
      this.total = this.alimentos[0].precio * 1;
      this.bande = true; 
      
    })

 }


  agregar(){
    const {tamanio,canti} = this.miForm.value;  

    //console.log('ide:',this.ide,'canti:',canti,'total:',this.total,'tamanio',tamanio)

    this.productosservice.addTocar(this.ide,tamanio,canti,this.total)
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
  
}
