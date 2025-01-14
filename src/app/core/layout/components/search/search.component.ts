import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-search',
  imports: [ButtonModule, FontAwesomeModule,],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  location = 'Localisation';
  genres = 'Genres';
  dates = 'Période';
}
