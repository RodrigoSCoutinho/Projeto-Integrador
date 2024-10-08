import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { WaitIconComponent } from './componentes/wait-icon/wait-icon.component';
import { MainComponent } from './componentes/main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DespesasComponent } from './componentes/despesas/despesas.component';
import { ReceitasComponent } from './componentes/receitas/receitas.component';
import { PagamentosComponent } from './componentes/pagamentos/pagamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WaitIconComponent,
    MainComponent,
    DespesasComponent,
    ReceitasComponent,
    PagamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
