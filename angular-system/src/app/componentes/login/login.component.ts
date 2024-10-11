import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SalutarToken } from 'src/app/models/SalutarToken';
import { Usuario } from 'src/app/models/Usuario';
import { LoginService } from 'src/app/servicos/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loading: boolean = false;
  public message: string = '';
  public usuario: Usuario = new Usuario();

  public constructor(
    private route: Router, 
    private service: LoginService) { 
  }

  public logar(){
    this.loading = true;
    this.service.efetuarLogin(this.usuario).subscribe(
    {
      next: (res: SalutarToken) => {
        this.loading = false;
        localStorage.setItem('token', res.token);
        this.route.navigate(['main']);
      },
      error: (err: any) => {
        this.message = "Usuario/Senha Invalidos";
        this.loading = false;
         }
      }
    );
  }
}
