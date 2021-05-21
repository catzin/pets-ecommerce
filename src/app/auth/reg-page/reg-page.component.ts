import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit {

  Reg:FormGroup = this.fb.group({
    nombre:['',[Validators.required]],
    appaterno:['',[Validators.required]],
    apmaterno:['',[Validators.required]],
    email:['',[Validators.email , Validators.required]],
    password:['',[Validators.required,Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  registrar(){
    const{nombre,appaterno,apmaterno,email,password} = this.Reg.value;
    
    this.authservice.registrar(nombre,appaterno,apmaterno,email,password)
    .subscribe( ok =>{

      if(ok == true){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Bienvenido',
          showConfirmButton: false,
          timer: 1500
          }).then(()=>{

            this.router.navigateByUrl('/');

          })
      }
    })
  
  }

}
