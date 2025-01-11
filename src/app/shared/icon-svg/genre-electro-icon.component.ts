import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-genre-electro-icon',
  template: `
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 512 512"
      class="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <path
        style="fill:#25B6D2;"
        d="M480,452.688H32c-17.6,0-32-14.4-32-32V91.312c0-17.6,14.4-32,32-32h448c17.6,0,32,14.4,32,32
	v329.376C512,438.288,497.6,452.688,480,452.688z"
      />
      <circle style="fill:#FFFFFF;" cx="80" cy="139.296" r="32" />
      <rect x="48" y="340.704" style="fill:#E04F5F;" width="32" height="64" />
      <circle style="fill:#FFFFFF;" cx="304" cy="256" r="144" />
      <polygon
        points="271.104,327.952 121.808,311.36 81.648,173.536 97.008,169.056 134.192,296.64 272.896,312.048 "
      />
      <circle style="fill:#E04F5F;" cx="304" cy="256" r="32" />
    </svg>
  `,
})
export class GenreElectroIconComponent {}
