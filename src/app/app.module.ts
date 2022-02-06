import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardVagaComponent } from './components/card-vaga/card-vaga.component';
import { PainelVagasComponent } from './components/painel-vagas/painel-vagas.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtualizarVagaComponent } from './components/atualizar-vaga/atualizar-vaga.component';

@NgModule({
  declarations: [
    AppComponent,
    CardVagaComponent,
    PainelVagasComponent,
    MenuComponent,
    AtualizarVagaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
