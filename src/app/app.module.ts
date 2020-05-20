import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';  /*firebase*/
import { environment } from '../environments/environment'; /*firebase*/
import { AngularFirestoreModule } from '@angular/fire/firestore'; /*firebase extra*/
import { AngularFireStorageModule } from '@angular/fire/storage'; /*firebase extra*/
import { AngularFireAuthModule } from '@angular/fire/auth'; /*firebase extra*/

import { ConexionService } from './services/conexion.service';
import { ListaComponent } from './componets/lista/lista.component';
import { ListaaddComponent } from './componets/listaadd/listaadd.component'; /*importar servicio*/

import { InicioComponent } from './componets/inicio/inicio.component';
import { InfoComponent } from './componets/info/info.component';
import { PantallaComponent } from './componets/pantalla/pantalla.component';
import { FooterComponent } from './componets/footer/footer.component';

import { BarranavComponent } from './componets/barranav/barranav.component'; /*firebase3 || habilita formulario*/
import { FormsModule } from '@angular/forms';
import { ControlmaestroComponent } from './componets/controlmaestro/controlmaestro.component'; /*habilita formularios*/

import { RouterModule, Routes } from '@angular/router';     /*agregar esta linea para routear*/

const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'pantalla', component: PantallaComponent },
  { path: 'controlmaestro', component: ControlmaestroComponent },
  { path: '', component: InicioComponent, pathMatch: 'full'},    /* abrira con inicio*/
  { path: '**', redirectTo: '/', pathMatch: 'full'}   /*ruta desconocida dirije a inicio */
  ];


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaaddComponent,
    InicioComponent,
    InfoComponent,
    PantallaComponent,
    FooterComponent,
    BarranavComponent,
    ControlmaestroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), /*firebase*/
    AngularFirestoreModule, /*imports firebase/firestore, only needed for database features*/
    AngularFireAuthModule, /*imports firebase/auth, only needed for auth features,*/
    AngularFireStorageModule, /*imports firebase/storage only needed for storage features*/
    FormsModule,
    RouterModule.forRoot(routes)                   /*agregamos esto para que funcionen la rutas*/
  ],
  providers: [ ConexionService ], /*importar servicio*/
  bootstrap: [AppComponent]
})
export class AppModule { }
