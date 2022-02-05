import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarVagaComponent } from './atualizar-vaga.component';

describe('AtualizarVagaComponent', () => {
  let component: AtualizarVagaComponent;
  let fixture: ComponentFixture<AtualizarVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
