import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() cancionAgregada = new EventEmitter<any>();

  form = {
    h1: "AGREGAR CANCIONES",
    label1: "Ingrese el título",
    label2: "Ingrese el género de la canción",
    label3: "Ingrese el año de lanzamiento",
    label4: "Duración de la canción",
    label5: "Nombre del álbum",
    button: "Registrar Canción"
  };

  nuevaCancion = {
    id: 0,
    titulo: '',
    genero: '',
    anio: '',
    duracion: '',
    album: '',
    artistaId: 0
  };

  agregarCancion() {
    this.cancionAgregada.emit(this.nuevaCancion);
    
    this.nuevaCancion = {
      id: 0,
      titulo: '',
      genero: '',
      anio: '',
      duracion: '',
      album: '',
      artistaId: 0
    };
  }
}
