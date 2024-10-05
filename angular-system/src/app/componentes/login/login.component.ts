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
    private loginService: LoginService
  ) { 
    
  }

  public ngOnInit() {
  }

  public login(){
    this.loading = true;
    this.loginService.login(this.usuario).subscribe(
      (res: SalutarToken) => {
        this.loading = false;
        localStorage.setItem('token', res.token);
        this.route.navigate(['main']);
        console.log("Deu certo o login");
      },
      (err: any) => {
        this.message = "User/Password invalid";
        this.loading = false;
      }
    );
    console.log("login");
  }
}
