import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { NavComponent } from './nav/nav.component';
import { NavIzquierdaComponent } from './nav-izquierda/nav-izquierda.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';


const routes: Routes = [
  { path: 'home', component: ContenidoComponent },
  { path: '',component: ContenidoComponent , pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NavComponent,
    NavIzquierdaComponent,
    FooterComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
