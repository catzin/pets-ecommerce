import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Usuario } from '../../../auth/interfaces/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  log:boolean = false;
  private usuario!:Usuario;

  constructor(private authservice:AuthService) { }
  

  ngOnInit(): void {

    this.usuario = this.authservice.getUsuario();

    console.log(this.usuario.nombre)
      
  }


}
