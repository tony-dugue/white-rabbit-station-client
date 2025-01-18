import { Component, inject, OnInit } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogService } from 'primeng/dynamicdialog';
import { MenuItem } from 'primeng/api';
import { SearchComponent } from '../search/search.component';
import { CategoryComponent } from '../category/category.component';
import { ToastService } from '../../services/toast.service';
import { WhiteRabbitLogoComponent } from '../../../../shared/icon-svg/white-rabbit-logo.component';

@Component({
  selector: 'app-navbar',
  imports: [
    ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenuModule,
    AvatarComponent,
    SearchComponent,
    WhiteRabbitLogoComponent,
    CategoryComponent,
  ],
  providers: [DialogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  currentMenuItems: MenuItem[] | undefined = [];

  toastService = inject(ToastService);

  ngOnInit(): void {
    this.fetchMenu();
  }

  private fetchMenu() {
    return (this.currentMenuItems = [
      { label: 'Connexion', styleClass: 'font-bold', routerLink: '/connexion' },
      { label: 'Inscription', routerLink: '/creation-compte' },
    ]);
  }
}
