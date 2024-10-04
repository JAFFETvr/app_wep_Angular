import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { ListaReproduccionComponent } from './lista-reproduccion/lista-reproduccion.component';
import { HeaderComponent } from './header/header.component';
import { ArtistaComponent } from './artista/artista.component';
import { ListaArtistasComponent } from './lista-artistas/lista-artistas.component';
import { ReproductorComponent } from './reproductor/reproductor.component';

@NgModule({
  declarations: [
    UsersDashboardComponent,
    UserFormComponent,
    ListaReproduccionComponent,
    HeaderComponent,
    ArtistaComponent,
    ListaArtistasComponent,
    ReproductorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UsersDashboardComponent,
    UserFormComponent,          
    ListaReproduccionComponent, 
    HeaderComponent,
    ArtistaComponent,
    ListaArtistasComponent
  ]
})
export class UsersModule { }
