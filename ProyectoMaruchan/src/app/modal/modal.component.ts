import { Component, OnInit } from '@angular/core';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show(modalElement:any){
    const modal=new Modal(modalElement);
    modal.show();
  }

}
