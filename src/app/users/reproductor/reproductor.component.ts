import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnChanges {
  @Input() canciones: any[] = [];
  indiceActual: number = 0;
  isPlaying: boolean = false;
  cancionActual: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['canciones']) {
      this.actualizarCancionActual();
    }
  }

  ngOnInit() {
    this.actualizarCancionActual();
  }

  actualizarCancionActual() {
    if (this.canciones.length > 0) {
      this.cancionActual = this.canciones[this.indiceActual];
    }
  }

  siguienteCancion() {
    if (this.indiceActual < this.canciones.length - 1) {
      this.indiceActual++;
      this.actualizarCancionActual();
      this.isPlaying = true;
    }
  }

  anteriorCancion() {
    if (this.indiceActual > 0) {
      this.indiceActual--;
      this.actualizarCancionActual();
      this.isPlaying = true;
    }
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
  }
}
