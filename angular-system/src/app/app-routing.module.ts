import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { authGuard } from './auth.guard';
import { ReceitasComponent } from './componentes/receitas/receitas.component';
import { DespesasComponent } from './componentes/despesas/despesas.component';
import { PagamentosComponent } from './componentes/pagamentos/pagamentos.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "main", component: MainComponent, canActivate: [authGuard]},
  { path: 'receitas', component: ReceitasComponent },
  { path: 'despesas', component: DespesasComponent },
  { path: 'pagamentos', component: PagamentosComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
