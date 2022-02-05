import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardVagaComponent } from './card-vaga/card-vaga.component';
import { PainelVagasComponent } from './painel-vagas/painel-vagas.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { FormsModule } from '@angular/forms';
import { AtualizarVagaComponent } from './atualizar-vaga/atualizar-vaga.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
