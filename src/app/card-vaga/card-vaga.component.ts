import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-card-vaga',
  templateUrl: './card-vaga.component.html',
  styleUrls: ['./card-vaga.component.css']
})

export class CardVagaComponent implements OnInit {

  public vagas: Vaga[] = [];
  public vaga: Vaga = new Vaga(0, "", "", "", 0, "", "");

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    this._vagasService.getVagas()
      .subscribe(
        retornaVagas => {
          this.vagas = retornaVagas.map(
            vaga => {
              return new Vaga(
                vaga.id,
                vaga.descricao,
                vaga.reqObrigatorios,
                vaga.reqDesejaveis,
                vaga.remuneracao,
                vaga.beneficios,
                vaga.local,
              );
            }
          )
        }
      )
  }

  excluir(id: number) {
    this._vagasService.removerVaga(id).subscribe(
      vaga => { this.vaga = new Vaga(0, "", "", "", 0, "", "") },
      err => {
        console.log("erro ao excluir");
      }
    );
    window.location.href = "/mural";
  }
}

