import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-artistas',
  templateUrl: './lista-artistas.component.html',
  styleUrls: ['./lista-artistas.component.css']
})
export class ListaArtistasComponent {
  artistas: any[] = []; 
  artistaEditando: any = null; 

  agregarArtista(artista: any) {
    this.artistas.push(artista); 
  }

  editarArtista(artista: any) {
    this.artistaEditando = { ...artista }; 
  }

  guardarEdicion() {
    const index = this.artistas.findIndex(a => a.id === this.artistaEditando.id);
    if (index !== -1) {
      this.artistas[index] = this.artistaEditando; 
      this.artistaEditando = null; 
    }
  }

  eliminarArtista(id: number) {
    this.artistas = this.artistas.filter(artista => artista.id !== id);
  }
}
