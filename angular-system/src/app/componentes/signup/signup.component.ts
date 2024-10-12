import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/Signup';
import { SignupUserService } from 'src/app/servicos/signup-user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public loading: boolean = false;
  public message: string = '';
  public usuario: Signup = new Signup();

  public constructor(
    private route: Router, 
    private service: SignupUserService) { 
  }

  public criarLogin(){
    this.loading = true;
    this.service.criarUsuario(this.usuario).subscribe(
      {
      next: (res: any) => {
        this.loading = false;
        this.route.navigate(['login']);
      },
      error: (err: any) => {
        this.message = "Erro ao criar usuário";
        this.loading = false;
         }
      }
    );
  }
}
