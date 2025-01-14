import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../../core/layout/components/navbar/navbar.component';
import { FooterComponent } from '../../core/layout/components/footer/footer.component';
import { LayoutWrapperComponent } from '../../core/layout/layout-wrapper/layout-wrapper.component';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, FontAwesomeModule, LayoutWrapperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
