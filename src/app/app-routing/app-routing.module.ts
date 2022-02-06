import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarVagaComponent } from '../components/atualizar-vaga/atualizar-vaga.component';
import { CardVagaComponent } from '../components/card-vaga/card-vaga.component';
import { PainelVagasComponent } from '../components/painel-vagas/painel-vagas.component';

const routes: Routes = [
  { path: 'mural', component: CardVagaComponent },
  { path: 'painel', component: PainelVagasComponent },
  { path: 'atualizar/:id', component: AtualizarVagaComponent },
  { path: '', redirectTo: '/mural', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
