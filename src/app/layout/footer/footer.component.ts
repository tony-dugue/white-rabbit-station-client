import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WhiteRabbitLogoComponent } from "../../shared/icon-svg/white-rabbit-logo.component";

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule, WhiteRabbitLogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
