import { Injectable } from '@angular/core';
import { Category, CategoryName } from '../models/category.model';
import { BehaviorSubject } from 'rxjs';

import { GenreDiscoIconComponent } from '../../../shared/icon-svg/genre-disco-icon.component';
import { GenreRockIconComponent } from '../../../shared/icon-svg/genre-rock-icon.component';
import { GenreJazzIconComponent } from '../../../shared/icon-svg/genre-jazz-icon.component';
import { GenreHardRockIconComponent } from '../../../shared/icon-svg/genre-hard-rock-icon.component';
import { GenreIndieRockIconComponent } from '../../../shared/icon-svg/genre-indie-rock-icon.component';
import { GenreBluesIconComponent } from '../../../shared/icon-svg/genre-blues-icon.component';
import { GenrePunkIconComponent } from '../../../shared/icon-svg/genre-punk-icon.component';
import { GenreMetalIconComponent } from '../../../shared/icon-svg/genre-metal-icon.component';
import { GenreAlternatifIconComponent } from '../../../shared/icon-svg/genre-alternatif-icon.component';
import { GenreCountryIconComponent } from '../../../shared/icon-svg/genre-country-icon.component';
import { GenreRnbIconComponent } from '../../../shared/icon-svg/genre-rnb-icon.component';
import { GenreVarietesIconComponent } from '../../../shared/icon-svg/genre-varietes-icon.component';
import { GenreFunkIconComponent } from '../../../shared/icon-svg/genre-funk-icon.component';
import { GenreRapIconComponent } from '../../../shared/icon-svg/genre-rap-icon.component';
import { GenreSoulIconComponent } from '../../../shared/icon-svg/genre-soul-icon.component';
import { GenreSoundtrackIconComponent } from '../../../shared/icon-svg/genre-soundtrack-icon.component';
import { GenreMusiqueMondeIconComponent } from '../../../shared/icon-svg/genre-musique-monde-icon.component';
import { GenrePopRetroIconComponent } from '../../../shared/icon-svg/genre-pop-retro-icon.component';
import { GenreClassiqueIconComponent } from '../../../shared/icon-svg/genre-classique-icon.component';
import { GenrePopIconComponent } from '../../../shared/icon-svg/genre-pop-icon.component';
import { GenreElectroIconComponent } from '../../../shared/icon-svg/genre-electro-icon.component';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [
    {
      iconComponent: GenreDiscoIconComponent,
      displayName: 'All',
      technicalName: 'ALL',
      activated: false,
    },
    {
      iconComponent: GenreRockIconComponent,
      displayName: 'Rock',
      technicalName: 'ROCK',
      activated: false,
    },
    {
      iconComponent: GenreHardRockIconComponent,
      displayName: 'Hard Rock',
      technicalName: 'HARD ROCK',
      activated: false,
    },
    {
      iconComponent: GenreIndieRockIconComponent,
      displayName: 'Indie Rock',
      technicalName: 'INDIE ROCK',
      activated: false,
    },
    {
      iconComponent: GenreBluesIconComponent,
      displayName: 'Blues',
      technicalName: 'BLUES',
      activated: false,
    },
    {
      iconComponent: GenrePunkIconComponent,
      displayName: 'Punk',
      technicalName: 'PUNK',
      activated: false,
    },
    {
      iconComponent: GenreMetalIconComponent,
      displayName: 'Metal',
      technicalName: 'METAL',
      activated: false,
    },
    {
      iconComponent: GenreAlternatifIconComponent,
      displayName: 'Alternatif',
      technicalName: 'ALTERNATIF',
      activated: false,
    },
    {
      iconComponent: GenreCountryIconComponent,
      displayName: 'Country',
      technicalName: 'COUNTRY',
      activated: false,
    },
    {
      iconComponent: GenreRapIconComponent,
      displayName: 'Rap / Hip Hop',
      technicalName: 'RAP HIP HOP',
      activated: false,
    },
    {
      iconComponent: GenreJazzIconComponent,
      displayName: 'Jazz',
      technicalName: 'JAZZ',
      activated: false,
    },
    {
      iconComponent: GenreVarietesIconComponent,
      displayName: 'Variétés',
      technicalName: 'VARIETES',
      activated: false,
    },
    {
      iconComponent: GenreFunkIconComponent,
      displayName: 'Funk',
      technicalName: 'FUNK',
      activated: false,
    },
    {
      iconComponent: GenreSoulIconComponent,
      displayName: 'Soul',
      technicalName: 'SOUL',
      activated: false,
    },
    {
      iconComponent: GenreRnbIconComponent,
      displayName: 'RNB',
      technicalName: 'RNB',
      activated: false,
    },
    {
      iconComponent: GenreDiscoIconComponent,
      displayName: 'Disco',
      technicalName: 'DISCO',
      activated: false,
    },
    {
      iconComponent: GenreSoundtrackIconComponent,
      displayName: 'Soundtrack',
      technicalName: 'SOUNDTRACK',
      activated: false,
    },
    {
      iconComponent: GenreMusiqueMondeIconComponent,
      displayName: 'Musique du monde',
      technicalName: 'MUSIQUE DU MONDE',
      activated: false,
    },
    {
      iconComponent: GenrePopRetroIconComponent,
      displayName: 'Pop Retro',
      technicalName: 'POP RETRO',
      activated: false,
    },
    {
      iconComponent: GenreClassiqueIconComponent,
      displayName: 'Musique classique',
      technicalName: 'MUSIQUE CLASSIQUE',
      activated: false,
    },
    {
      iconComponent: GenrePopIconComponent,
      displayName: 'Pop',
      technicalName: 'POP',
      activated: false,
    },
    {
      iconComponent: GenreElectroIconComponent,
      displayName: 'Electro',
      technicalName: 'ELECTRO',
      activated: false,
    },
  ];

  private changeCategory$ = new BehaviorSubject<Category>(
    this.getCategoryByDefault()
  );
  changeCategoryObs = this.changeCategory$.asObservable();

  changeCategory(category: Category): void {
    this.changeCategory$.next(category);
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryByDefault() {
    return this.categories[0];
  }

  getCategoryByTechnicalName(
    technicalName: CategoryName
  ): Category | undefined {
    return this.categories.find(
      (category) => category.technicalName === technicalName
    );
  }
}
