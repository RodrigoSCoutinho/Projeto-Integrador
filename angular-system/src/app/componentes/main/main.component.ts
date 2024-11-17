import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservasService } from 'src/app/servicos/reservas.service';
import { DespesasService } from 'src/app/servicos/despesas.service';
import { Despesa } from '../../models/Despesa';
import { Reserva } from '../../models/Reserva';
import { Condominio } from '../../models/Condominio';
import { Apartamento } from '../../models/Apartamento';
import { CondominioService } from 'src/app/servicos/condominio.service';
import { ApartamentoService } from 'src/app/servicos/apartamento.service';
import { SignupUserService } from 'src/app/servicos/signup-user.service';
import { Signup } from 'src/app/models/Signup';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  nomeUsuario = 'Rodrigo C.';
  reservaForm: FormGroup;
  despesaForm: FormGroup;
  condominioForm: FormGroup;
  apartamentoForm: FormGroup;

  areasDisponiveis = ['SALAO_DE_FESTAS', 'CHURRASQUEIRA', 'ACADEMIA', 'QUADRA'];
  categoriasDespesas = ['MANUTENCAO', 'LIMPEZA', 'SEGURANÇA', 'AGUA & LUZ', 'OUTROS'];

  reservas: Reserva[] = [];
  despesas: Despesa[] = [];
  condominios: Condominio[] = [];
  apartamentos: Apartamento[] = [];

  editandoCondominio = false;
  condominioSelecionado: Condominio | null = null;
  editandoApartamento = false;
  apartamentoSelecionado: Apartamento | null = null;

  constructor(
    private fb: FormBuilder,
    private reservaService: ReservasService,
    private despesaService: DespesasService,
    private condominioService: CondominioService,
    private apartamentoService: ApartamentoService,
    private signupUserService: SignupUserService
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

    
    this.condominioForm = this.fb.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      quantidadeBlocos: ['', [Validators.required, Validators.min(1)]]
    });

    this.apartamentoForm = this.fb.group({
      numero: ['', Validators.required],
      bloco: ['', Validators.required],
      andar: ['', [Validators.required, Validators.min(0)]],
      metroQuadrado: ['', [Validators.required, Validators.min(0)]],
      condominioId: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.carregarReservas();
    this.carregarDespesas();
    this.carregarCondominios();
    this.carregarApartamentos();
    this.carregarUsuario();
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

   // Novos métodos para Condomínio
   carregarCondominios() {
    this.condominioService.listarTodos().subscribe(
      condominios => this.condominios = condominios
    );
  }

  onSubmitCondominio() {
    if (this.condominioForm.valid) {
      if (this.editandoCondominio && this.condominioSelecionado) {
        this.condominioService.atualizar(this.condominioSelecionado.id!, this.condominioForm.value)
          .subscribe(() => {
            this.carregarCondominios();
            this.resetCondominioForm();
          });
      } else {
        this.condominioService.criar(this.condominioForm.value)
          .subscribe(() => {
            this.carregarCondominios();
            this.resetCondominioForm();
          });
      }
    }
  }

  editarCondominio(condominio: Condominio) {
    this.editandoCondominio = true;
    this.condominioSelecionado = condominio;
    this.condominioForm.patchValue({
      nome: condominio.nome,
      endereco: condominio.endereco,
      quantidadeBlocos: condominio.quantidadeBlocos
    });
  }

  deletarCondominio(id: number) {
    if (confirm('Tem certeza que deseja excluir este condomínio?')) {
      this.condominioService.deletar(id).subscribe(() => {
        this.carregarCondominios();
      });
    }
  }

  resetCondominioForm() {
    this.editandoCondominio = false;
    this.condominioSelecionado = null;
    this.condominioForm.reset();
  }

  // Novos métodos para Apartamento
  carregarApartamentos() {
    this.apartamentoService.listarTodos().subscribe(
      apartamentos => this.apartamentos = apartamentos
    );
  }

  onSubmitApartamento() {
    if (this.apartamentoForm.valid) {
      if (this.editandoApartamento && this.apartamentoSelecionado) {
        this.apartamentoService.atualizar(this.apartamentoSelecionado.id!, this.apartamentoForm.value)
          .subscribe(() => {
            this.carregarApartamentos();
            this.resetApartamentoForm();
          });
      } else {
        this.apartamentoService.criar(this.apartamentoForm.value)
          .subscribe(() => {
            this.carregarApartamentos();
            this.resetApartamentoForm();
          });
      }
    }
  }

  editarApartamento(apartamento: Apartamento) {
    this.editandoApartamento = true;
    this.apartamentoSelecionado = apartamento;
    this.apartamentoForm.patchValue({
      numero: apartamento.numero,
      bloco: apartamento.bloco,
      andar: apartamento.andar,
      metroQuadrado: apartamento.metroQuadrado,
      condominioId: apartamento.condominioId
    });
  }

  deletarApartamento(id: number) {
    if (confirm('Tem certeza que deseja excluir este apartamento?')) {
      this.apartamentoService.deletar(id).subscribe(() => {
        this.carregarApartamentos();
      });
    }
  }

  resetApartamentoForm() {
    this.editandoApartamento = false;
    this.apartamentoSelecionado = null;
    this.apartamentoForm.reset();
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

  carregarUsuario() {
    const loginString = localStorage.getItem('login');
    if (loginString) {
      const login: Signup = JSON.parse(loginString);
      this.signupUserService.getUsuario(login).subscribe(usuario => {
        this.nomeUsuario = usuario.nome;
      });
    }
  }

  logout() {
    // localStorage.removeItem('token');
    window.location.reload();
    window.location.href = '/login';
  }
}
