import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-reproduccion',
  templateUrl: './lista-reproduccion.component.html',
  styleUrls: ['./lista-reproduccion.component.css']
})
export class ListaReproduccionComponent implements OnInit {
  @Input() canciones: any[] = [];
  cancionEditando: any | null = null;
  detallesVisibles: { [key: number]: boolean } = {}; 

  private cancionesPredeterminadas = [
    { id: 1, titulo: 'Canción 1', genero: 'Pop', anio: 2020, duracion: 3.5, album: 'Álbum 1' },
    { id: 2, titulo: 'Canción 2', genero: 'Rock', anio: 2019, duracion: 4.2, album: 'Álbum 2' },
    { id: 3, titulo: 'Canción 3', genero: 'Hip-Hop', anio: 2021, duracion: 3.8, album: 'Álbum 3' },
    { id: 4, titulo: 'Canción 4', genero: 'Jazz', anio: 2018, duracion: 5.0, album: 'Álbum 4' },
    { id: 5, titulo: 'Canción 5', genero: 'Clásica', anio: 2022, duracion: 6.1, album: 'Álbum 5' }
  ];

  ngOnInit() {
    this.canciones = this.cancionesPredeterminadas;
  }

  agregarCancion(cancion: any) {
    const maxId = this.canciones.reduce((max, c) => Math.max(max, c.id), 0);
    cancion.id = maxId + 1;
    
    this.canciones.push(cancion);
  }

  editarCancion(cancion: any) {
    this.cancionEditando = { ...cancion };
  }

  guardarEdicion() {
    const index = this.canciones.findIndex(c => c.id === this.cancionEditando?.id);
    if (index !== -1) {
      this.canciones[index] = this.cancionEditando;
      this.cancionEditando = null;
    }
  }

  eliminarCancion(id: number) {
    this.canciones = this.canciones.filter(c => c.id !== id);
  }

  toggleDetalles(id: number) {
    this.detallesVisibles[id] = !this.detallesVisibles[id];
  }
}
