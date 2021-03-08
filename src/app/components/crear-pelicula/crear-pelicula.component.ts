import { Component, OnInit } from '@angular/core';

import { CrearPeliculaService } from './crear-pelicula.service';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css'],
  providers: [CrearPeliculaService]
})
export class CrearPeliculaComponent implements OnInit {

  constructor(private crearPeliculaService: CrearPeliculaService) { }

  ngOnInit(): void {
  }

}
