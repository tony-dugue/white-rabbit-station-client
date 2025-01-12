import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './layout/components/footer/footer.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { ToastModule } from "primeng/toast";
import { MessageService } from 'primeng/api';
import { ToastService } from './layout/services/toast.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, FontAwesomeModule, NavbarComponent, FooterComponent, ToastModule],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'white-rabbit-station-client';

  faIconLibrary = inject(FaIconLibrary);
  toastService = inject(ToastService);
  messageService = inject(MessageService);

  ngOnInit(): void {
    this.initFontAwesome();
    this.listenToastService();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

  private listenToastService() {
    this.toastService.sendSub.subscribe({
      next: newMessage => {
        if(newMessage && newMessage.summary !== this.toastService.INIT_STATE) {
          this.messageService.add(newMessage);
        }
      }
    })
  }
}
