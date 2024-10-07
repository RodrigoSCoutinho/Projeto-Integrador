import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "main", component: MainComponent, canActivate: [authGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
