import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-atualizar-vaga',
  templateUrl: './atualizar-vaga.component.html',
  styleUrls: ['./atualizar-vaga.component.css']
})
export class AtualizarVagaComponent implements OnInit {

  public vaga: Vaga = new Vaga(0, "", "", "", 0, "", "");

  constructor(private _vagasService: VagasService, private location: Location) { }

  ngOnInit(): void {

  }

  atualizar(id: number) {
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      vaga => { this.vaga = new Vaga(0, "", "", "", 0, "", "") },
      err => {
        console.log("erro ao atualizar");
      }
    );
    window.location.href = "/mural";
  }
}
