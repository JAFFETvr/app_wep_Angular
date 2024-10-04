import { Component } from '@angular/core';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent {
  canciones: any[] = [];

  agregarCancion(cancion: any) {
    this.canciones.push(cancion);
  }
}
