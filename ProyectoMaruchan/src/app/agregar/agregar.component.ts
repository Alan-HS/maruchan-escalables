import { Component, OnInit } from '@angular/core';
import { MaruchanService } from '../maruchan.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private maruchanService: MaruchanService) { }

  ngOnInit(): void {
  }

}
