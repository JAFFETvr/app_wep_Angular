import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-artistas',
  templateUrl: './lista-artistas.component.html',
  styleUrls: ['./lista-artistas.component.css']
})
export class ListaArtistasComponent implements OnInit {
  artistas: any[] = [];
  artistaEditando: any | null = null;

  private artistasPredeterminados = [
    { id: 1, nombre: 'Artista 1', apellido: 'Apellido 1', pais: 'País 1', edad: 30, generoMusical: 'Pop' },
    { id: 2, nombre: 'Artista 2', apellido: 'Apellido 2', pais: 'País 2', edad: 25, generoMusical: 'Rock' },
    { id: 3, nombre: 'Artista 3', apellido: 'Apellido 3', pais: 'País 3', edad: 35, generoMusical: 'Jazz' },
    { id: 4, nombre: 'Artista 4', apellido: 'Apellido 4', pais: 'País 4', edad: 28, generoMusical: 'Hip-Hop' },
    { id: 5, nombre: 'Artista 5', apellido: 'Apellido 5', pais: 'País 5', edad: 40, generoMusical: 'Clásica' }
  ];

  ngOnInit() {
    this.artistas = this.artistasPredeterminados;
  }

  agregarArtista(artista: any) {
    const maxId = this.artistas.reduce((max, a) => Math.max(max, a.id), 0);
    artista.id = maxId + 1;
    
    this.artistas.push(artista);
  }

  editarArtista(artista: any) {
    this.artistaEditando = { ...artista };
  }

  guardarEdicion() {
    const index = this.artistas.findIndex(a => a.id === this.artistaEditando?.id);
    if (index !== -1) {
      this.artistas[index] = this.artistaEditando;
      this.artistaEditando = null;
    }
  }

  eliminarArtista(id: number) {
    this.artistas = this.artistas.filter(artista => artista.id !== id);
  }
}
