import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-reproduccion',
  templateUrl: './lista-reproduccion.component.html',
  styleUrls: ['./lista-reproduccion.component.css']
})
export class ListaReproduccionComponent {
  @Input() canciones: any[] = [];
  cancionEditando: any | null = null;
  detallesVisibles: { [key: number]: boolean } = {}; 

  agregarCancion(cancion: any) {
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
