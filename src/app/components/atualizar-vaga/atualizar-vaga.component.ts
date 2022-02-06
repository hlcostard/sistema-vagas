import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaga } from '../../models/Vagas.model';
import { VagasService } from '../../vagas.service';



@Component({
  selector: 'app-atualizar-vaga',
  templateUrl: './atualizar-vaga.component.html',
  styleUrls: ['./atualizar-vaga.component.css']
})
export class AtualizarVagaComponent implements OnInit {

  public vaga: Vaga = new Vaga(0, "", "", "", 0, "", "");

  constructor(
    private _vagasService: VagasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  atualizaVaga = new FormGroup({
    descricao: new FormControl(''),
    reqObrigatorios: new FormControl(''),
    reqDesejaveis: new FormControl(''),
    remuneracao: new FormControl(''),
    beneficios: new FormControl(''),
    local: new FormControl('')
  })

  ngOnInit(): void {
    this._vagasService.consultarVaga(this.route.snapshot.params['id'])
      .subscribe(
        (res: any) => {
          this.atualizaVaga = new FormGroup({
            descricao: new FormControl(res['descricao']),
            reqObrigatorios: new FormControl(res['reqObrigatorios']),
            reqDesejaveis: new FormControl(res['reqDesejaveis']),
            remuneracao: new FormControl(res['remuneracao']),
            beneficios: new FormControl(res['beneficios']),
            local: new FormControl(res['local'])
          })
        }
      );
  }

  atualizar() {
    this._vagasService.atualizarVaga(this.route.snapshot.params['id'], this.atualizaVaga.value)
      .subscribe(
        (res) => {
          alert("Vaga atualizada com sucesso");
          this.router.navigate(['/mural']);
        }
      )
  }
}
