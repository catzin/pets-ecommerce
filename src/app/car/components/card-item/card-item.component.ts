import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarResponse } from '../../../productos/interfaces/car.interface';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

   @Input() item!:CarResponse;

   @Output() onDeleteItem: EventEmitter<CarResponse> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(){

    this.onDeleteItem.emit(this.item)
  }


}
