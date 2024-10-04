import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  nombre: string = '';
  apellido: string = '';
  pais: string = '';
  edad: number | null = null;
  generoMusical: string = '';
  private idCounter: number = 1; 

  @Output() artistaAgregado = new EventEmitter<any>(); 

  agregarArtista(event: Event) {
    event.preventDefault(); 

    const nuevoArtista = {
      id: this.idCounter++,
      nombre: this.nombre,
      apellido: this.apellido,
      pais: this.pais,
      edad: this.edad,
      generoMusical: this.generoMusical
    };

    this.artistaAgregado.emit(nuevoArtista);
    this.nombre = '';
    this.apellido = '';
    this.pais = '';
    this.edad = null;
    this.generoMusical = '';
  }
}
