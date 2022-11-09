import { Component, OnInit } from '@angular/core';
import { MaruchanService } from '../maruchan.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  id:any;
  nombre:any;
  precio:any;

  constructor(private maruchanService: MaruchanService) { }

  ngOnInit(): void {
    // this.maruchanService.getDataFromBackend().subscribe((response:any)=>{
    //   console.log(response);
    //   this.id=response._id;
    //   this.nombre=response.nombre;
    //   this.precio=response.precio;
    // });
  }

}
