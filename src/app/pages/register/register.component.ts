import { Component, inject } from '@angular/core';
import { AuthenticationResponse, RegistrationRequest } from '../../services/models';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../core/layout/components/footer/footer.component';
import { ToastService } from '../../core/layout/services/toast.service';
import { AuthenticationService } from '../../services/services/authentication.service';

@Component({
  selector: 'app-register',
  imports: [CardModule, InputTextModule, FormsModule, PasswordModule, ButtonModule, RouterLink, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

    authService = inject(AuthenticationService);
    toastService = inject(ToastService);
    router = inject(Router);
    
    registerRequest: RegistrationRequest = { email: '', firstname: '', lastname: '', password: '' };
    errorMsg: Array<string> = [];

    onRegister() {
      this.errorMsg = [];
      this.authService.register({ body: this.registerRequest }).subscribe({
            next: (res: AuthenticationResponse): void => {
              this.router.navigate(['activation-compte']);
              this.toastService.send({
                severity: 'success',
                detail: 'Votre compte a bien été crée !'
              });
            },
            error: (err) => {
              this.errorMsg = err.error.validationErrors;
              this.toastService.send({
                severity: 'error',
                detail: this.errorMsg.join(', '),
                summary: "Une erreur s'est produite",
              });
            },
          });
    }
}
