import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaga } from '../../models/Vagas.model';
import { VagasService } from '../../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public vaga: Vaga = new Vaga(0, "", "", "", 0, "", "");

  constructor(private _vagasService: VagasService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      vaga => {
        this.vaga = new Vaga(0, "", "", "", 0, "", "")
        alert("Vaga cadastrada");
        this.router.navigate(['/mural']);
      },
      err => {
        console.log("erro ao cadastrar");
      }
    );
  }
}


