import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  status:boolean = false;
  colonias:string[] = []; 


  dataForm:FormGroup = this.fb.group({
    calle:['',[Validators.required]],
    codigo:['',[Validators.required,Validators.minLength(5)]],
    exterior:['',[Validators.nullValidator]],
    interior:['',[Validators.nullValidator]],
    municipio:['',[Validators.required]],
    ciudad:['',[Validators.required]],
    estado:['',[Validators.required]],
    colonia:['',[Validators.required]],
    ref:['',Validators.nullValidator],
    tel:['',[Validators.required]]
    
  });

  constructor(private fb: FormBuilder, private authservice:AuthService) { }

  ngOnInit(): void {
  }


  buscar(){
 
    this.authservice.getDataCode(this.dataForm.get('codigo')?.value).subscribe(
      resp => {
        if(!resp.error){
          this.colonias = resp.response.asentamiento;
          this.dataForm.get('municipio')?.setValue(resp.response.municipio);
          this.dataForm.get('ciudad')?.setValue(resp.response.ciudad);
          this.dataForm.get('estado')?.setValue(resp.response.estado);
    
          this.status = true;

         
        }
      }
      
    )
  }


  enviar(){
    this.authservice.registarInformacion(this.dataForm).subscribe(resp => console.log(resp));
   
  }

}
