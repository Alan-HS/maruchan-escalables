import { Component, OnInit, ViewChild } from '@angular/core';
import { MaruchanService } from '../maruchan.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Maruchan } from '../maruchan';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  currentId : any;

  @ViewChild('maruchanForm') form : NgForm | any;

  arr: Maruchan[] = [];
  m = {} as Maruchan;
  m2 = {} as Maruchan;
  m3 = {} as Maruchan;
  test:any = "1324";
  id:any;
  nombre:any;
  precio:any;

  constructor(private maruchanService: MaruchanService) { 
  }

  ngOnInit(): void {
    this.maruchanService.getDataFromBackend().subscribe((response:any)=>{
      console.log(response);
      // this.id=response._id;
      // this.nombre=response.nombre;
      // this.precio=response.precio;
      for (var val of response) {
        this.arr.push(val);
        // console.log(val); // prints values: 10, 20, 30, 40
      }
      console.log(this.arr);
    });
  }

  borrarMaruchan(id:any) {
    this.m2.nombre = "";
    this.m2.precio = "";
    console.log(id);
    // console.log(form.value.nombre);
    // console.log(form.nombre);
    // this.m2.nombre = form.value.nombre;
    // this.m2.precio = form.value.precio;
    this.m2._id=id;
    console.log(this.m2);

    this.maruchanService.borrar_mar(this.m2).subscribe(data  =>{
    },error => {
      console.log(error);
    })
  }

  editarMaruchan(id:any){
    console.log(id);
    let actual = this.arr.find((p)=> {return p._id === id});
    console.log(actual);
    console.log(this.form);
    this.currentId = actual?._id;
    console.log(this.currentId);
    this.form.setValue({
      editnombre: actual?.nombre,
      editprecio: actual?.precio
    });
  }

  actualizarMaruchan(form2:NgForm){
    this.m3.nombre = "";
    this.m3.precio = "";
    console.log(form2.value);
    this.m3._id = this.currentId;
    this.m3.nombre = form2.value.editnombre;
    this.m3.precio = form2.value.editprecio;
    console.log(this.m3);
    this.maruchanService.actualizar_mar(this.m3).subscribe(data  =>{
    },error => {
      console.log(error);
    })
  }

}
