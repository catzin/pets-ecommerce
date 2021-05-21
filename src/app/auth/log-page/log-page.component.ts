import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'
import { Usuario } from '../interfaces/interfaces';
@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class LogPageComponent {


  Login:FormGroup = this.fb.group({
    email:['catzin9617@gmail.com',[Validators.required,Validators.email]],
    password:['123456',[Validators.required,Validators.minLength(6)]],

  });
  
  constructor(
    private fb: FormBuilder,
    private auth:AuthService, 
    private router:Router
  ) { }

  login(){

    
    const {email,password} = this.Login.value;
    this.auth.login(email,password)
    .subscribe(ok =>{
    
      if(ok === true){
  
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
      else{
        Swal.fire('Error',ok,'error')
      }

   

    })
  }


  

}
