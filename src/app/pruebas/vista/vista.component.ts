import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  data:number[] = [1,2,3,4,5,6,7,8,9,10];

  miForm: FormGroup = this.fb.group({

    cantidad:['',[Validators.required]],



  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.miForm.get('cantidad')?.valueChanges.subscribe(cantidad => console.log(cantidad))
  }

  enviar(){
    console.log(this.miForm.value);
  }

}
