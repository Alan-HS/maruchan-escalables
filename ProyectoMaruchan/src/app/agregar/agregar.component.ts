import { Component, OnInit } from '@angular/core';
import { MaruchanService } from '../maruchan.service';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Maruchan } from '../maruchan';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  m = {} as Maruchan;

  constructor(private maruchanService: MaruchanService) { }

  subirMaruchan(form: NgForm) {
    this.m.nombre = "";
    this.m.precio = "";
    // console.log(form.value.nombre);
    // console.log(form.nombre);
    this.m.nombre = form.value.nombre;
    this.m.precio = form.value.precio;
    console.log(this.m);

    this.maruchanService.agregar_mar(this.m).subscribe(data  =>{
    },error => {
      console.log(error);
    })
  }



  ngOnInit(): void {
  }

}
