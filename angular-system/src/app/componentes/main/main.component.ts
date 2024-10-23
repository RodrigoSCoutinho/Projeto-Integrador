import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservasService } from 'src/app/servicos/reservas.service';
import { DespesasService } from 'src/app/servicos/despesas.service';
import { Despesa } from '../../models/Despesa';
import { Reserva } from '../../models/Reserva';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  nomeUsuario = 'Rodrigo Coutinho';
  reservaForm: FormGroup;
  despesaForm: FormGroup;

  areasDisponiveis = ['SALAO_DE_FESTAS', 'CHURRASQUEIRA', 'ACADEMIA', 'QUADRA'];
  categoriasDespesas = ['MANUTENCAO', 'LIMPEZA', 'SEGURANÇA', 'AGUA & LUZ', 'OUTROS'];

  reservas: Reserva[] = [];
  despesas: Despesa[] = [];

  constructor(
    private fb: FormBuilder,
    private reservaService: ReservasService,
    private despesaService: DespesasService
  ) {
    this.reservaForm = this.fb.group({
      area: ['', Validators.required],
      morador: ['', Validators.required],
      data: ['', Validators.required]
    });

    this.despesaForm = this.fb.group({
      descricao: ['', Validators.required],
      valor: ['', [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.carregarReservas();
    this.carregarDespesas();
  }

  carregarReservas() {
    this.reservaService.getReservas().subscribe(reservas => {
      this.reservas = reservas;
    });
  }

  carregarDespesas() {
    this.despesaService.pegarDespesas().subscribe(despesas => {
      this.despesas = despesas;
    });
  }

  getReservasPendentes(): number {
    return this.reservas.filter(r => r.status === 'PENDENTE').length;
  }

  get totalDespesas(): number {
    return this.despesas.reduce((total, despesa) => total + despesa.valor, 0);
  }

  formatarData(data: string): string {
    return new Date(data).toLocaleDateString('pt-BR');
  }

  onSubmitReserva() {
    if (this.reservaForm.valid) {
      const novaReserva: Reserva = {
        id: 0,
        ...this.reservaForm.value,
        status: 'PENDENTE'
      };
      this.reservaService.criarReserva(novaReserva).subscribe(reserva => {
        this.reservas.push(reserva);
        this.reservaForm.reset();
      });
    }
  }

  onSubmitDespesa() {
    if (this.despesaForm.valid) {
      const novaDespesa: Despesa = {
        id: 0,
        ...this.despesaForm.value,
        data: new Date().toISOString().split('T')[0]
      };
      this.despesaService.criarDespesa(novaDespesa).subscribe(despesa => {
        this.despesas.push(despesa);
        this.despesaForm.reset();
      });
    }
  }

  aprovarReserva(id: number) {
    this.reservaService.aprovarReserva(id).subscribe(reserva => {
      const reservaIndex = this.reservas.findIndex(r => r.id === reserva.id);
      if (reservaIndex >= 0) {
        this.reservas[reservaIndex] = reserva;
      }
    });
  }

  recusarReserva(id: number) {
    this.reservaService.recusarReserva(id).subscribe(reserva => {
      const reservaIndex = this.reservas.findIndex(r => r.id === reserva.id);
      if (reservaIndex >= 0) {
        this.reservas[reservaIndex] = reserva;
      }
    });
  }
}
