import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {
  AuthenticationRequest,
  AuthenticationResponse,
} from '../../services/models';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../core/layout/components/footer/footer.component';
import { AuthenticationService } from '../../services/services';
import { ToastService } from '../../core/layout/services/toast.service';
import { TokenService } from '../../core/auth/services/token.service';

@Component({
  selector: 'app-login',
  imports: [
    CardModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    RouterLink,
    FooterComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthenticationService);
  toastService = inject(ToastService);
  router = inject(Router);
  tokenService = inject(TokenService);

  authRequest: AuthenticationRequest = { email: '', password: '' };
  errorMsg: Array<string> = [];

  onLogin() {
    this.errorMsg = [];
    this.authService.authenticate({ body: this.authRequest }).subscribe({
      next: (res: AuthenticationResponse): void => {
        this.tokenService.token = res.token as string;
        this.router.navigate(['accueil']);
        this.toastService.send({
          severity: 'success',
          detail: 'Vous êtes maintenant connecté !',
          summary: "Bienvenue",
        });
      },
      error: (err) => {
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.error);
        }
        this.toastService.send({
          severity: 'error',
          detail: this.errorMsg.join(', '),
          summary: "Une erreur s'est produite",
        });
      },
    });
  }
}
