import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Reserva {
  id: number;
  area: string;
  morador: string;
  data: string;
  status: 'pendente' | 'aprovada' | 'recusada';
}

interface Despesa {
  id: number;
  descricao: string;
  valor: number;
  data: string;
  categoria: string;
}@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  nomeUsuario = 'João Silva';
  reservaForm: FormGroup;
  despesaForm: FormGroup;

  areasDisponiveis = [
    'Salão de Festas',
    'Churrasqueira',
    'Quadra',
    'Academia'
  ];

  categoriasDespesas = [
    'Manutenção',
    'Limpeza',
    'Segurança',
    'Água/Luz',
    'Outros'
  ];

  reservas: Reserva[] = [];
  despesas: Despesa[] = [];

  constructor(private fb: FormBuilder) {
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
    this.carregarDados();
  }

  getReservasPendentes(): number {
    return this.reservas.filter(r => r.status === 'pendente').length;
  }

  get totalDespesas(): number {
    return this.despesas.reduce((total, despesa) => total + despesa.valor, 0);
  }

  formatarData(data: string): string {
    return new Date(data).toLocaleDateString('pt-BR');
  }

  carregarDados() {
    // Simular dados de reservas
    this.reservas = [
      {
        id: 1,
        area: 'Salão de Festas',
        morador: 'Maria Santos',
        data: '2024-10-20',
        status: 'pendente'
      }
    ];

    // Simular dados de despesas
    this.despesas = [
      {
        id: 1,
        descricao: 'Manutenção Elevador',
        valor: 1500,
        data: '2024-10-15',
        categoria: 'Manutenção'
      }
    ];
  }

  onSubmitReserva() {
    if (this.reservaForm.valid) {
      const novaReserva: Reserva = {
        id: this.reservas.length + 1,
        ...this.reservaForm.value,
        status: 'pendente'
      };
      this.reservas.push(novaReserva);
      this.reservaForm.reset();
    }
  }

  onSubmitDespesa() {
    if (this.despesaForm.valid) {
      const novaDespesa: Despesa = {
        id: this.despesas.length + 1,
        ...this.despesaForm.value,
        data: new Date().toISOString().split('T')[0]
      };
      this.despesas.push(novaDespesa);
      this.despesaForm.reset();
    }
  }

  aprovarReserva(id: number) {
    const reserva = this.reservas.find(r => r.id === id);
    if (reserva) {
      reserva.status = 'aprovada';
    }
  }

  recusarReserva(id: number) {
    const reserva = this.reservas.find(r => r.id === id);
    if (reserva) {
      reserva.status = 'recusada';
    }
  }
}