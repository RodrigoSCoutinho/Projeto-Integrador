import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { authGuard } from './auth.guard';
import { SignupComponent } from './componentes/signup/signup.component';

const routes: Routes = [
  { path: "", component: SignupComponent },
  {path: "login", component: LoginComponent},
  // {path: "main", component: MainComponent, canActivate: [authGuard]},
  {path: "main", component: MainComponent},
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
