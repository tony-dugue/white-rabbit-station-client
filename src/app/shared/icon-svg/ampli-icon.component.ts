import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ampli-icon',
  template: `
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 480 480"
      class="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <path
        d="M81.6,443.2c0,8-6.4,15.2-15.2,15.2H49.6c-8,0-15.2-6.4-15.2-15.2v-17.6c0-8,6.4-15.2,15.2-15.2h16.8
  c8,0,15.2,6.4,15.2,15.2C81.6,425.6,81.6,443.2,81.6,443.2z"
      />
      <path
        d="M445.6,443.2c0,8-6.4,15.2-15.2,15.2h-16.8c-8,0-15.2-6.4-15.2-15.2v-17.6c0-8,6.4-15.2,15.2-15.2h16.8
  c8,0,15.2,6.4,15.2,15.2V443.2z"
      />
      <path
        d="M416,112c0,8-6.4,15.2-15.2,15.2H79.2c-8,0-15.2-6.4-15.2-15.2V36.8c0-8,6.4-15.2,15.2-15.2h321.6c8,0,15.2,6.4,15.2,15.2
  V112z"
      />
      <path
        style="fill:#5B5E5C;"
        d="M480,386.4c0,17.6-14.4,31.2-31.2,31.2H31.2C13.6,417.6,0,403.2,0,386.4v-316c0-17.6,14.4-24,31.2-24
  H448c17.6,0,31.2,6.4,31.2,24v316H480z"
      />
      <path
        style="fill:#414442;"
        d="M480,396c0,17.6-14.4,31.2-31.2,31.2H31.2C13.6,427.2,0,412.8,0,396V87.2C0,70.4,14.4,56,31.2,56H448
  c17.6,0,31.2,14.4,31.2,31.2V396H480z"
      />
      <path
        style="fill:#303331;"
        d="M449.6,383.2c0,15.2-12,27.2-27.2,27.2H56.8c-15.2,0-27.2-12-27.2-27.2V117.6
  c0-15.2,12-27.2,27.2-27.2h365.6c15.2,0,27.2,12,27.2,27.2L449.6,383.2L449.6,383.2z"
      />
      <path
        d="M449.6,374.4c0,15.2-12,27.2-27.2,27.2H56.8c-15.2,0-27.2-12-27.2-27.2V108.8c0-15.2,12-27.2,27.2-27.2h365.6
  c15.2,0,27.2,12,27.2,27.2L449.6,374.4L449.6,374.4z"
      />
      <path
        id="SVGCleanerId_0"
        style="fill:#EAAE1B;"
        d="M423.2,82.4H56.8c-15.2,0-27.2,12-27.2,27.2v80h420v-80
  C449.6,94.4,437.6,82.4,423.2,82.4z"
      />
      <path
        style="fill:#E8C51C;"
        d="M423.2,88.8H56.8c-15.2,0-27.2,12-27.2,27.2v80h420v-80C449.6,100.8,437.6,88.8,423.2,88.8z"
      />
      <g>
        <path
          id="SVGCleanerId_0_1_"
          style="fill:#EAAE1B;"
          d="M423.2,82.4H56.8c-15.2,0-27.2,12-27.2,27.2v80h420v-80
    C449.6,94.4,437.6,82.4,423.2,82.4z"
        />
      </g>
      <rect x="187.2" y="133.6" style="fill:#A8750F;" width="72" height="56" />
      <path
        style="fill:#121C1B;"
        d="M259.2,130.4L259.2,130.4c1.6-2.4,2.4-5.6,0.8-8l-3.2-5.6c-1.6-2.4-4.8-4-7.2-3.2l0,0
  c0.8-2.4,0-5.6-3.2-7.2l-5.6-3.2c-2.4-1.6-5.6-0.8-7.2,0.8c0,0,0,0-0.8,0c-0.8-2.4-3.2-4.8-6.4-4.8H220c-3.2,0-5.6,2.4-6.4,4.8
  c0,0,0,0-0.8,0c-1.6-2.4-4.8-2.4-8-0.8l-4.8,3.2c-2.4,1.6-4,4-3.2,7.2l0,0c-2.4-0.8-5.6,0-7.2,3.2l-3.2,5.6
  c-1.6,2.4-0.8,5.6,0.8,7.2c0,0,0,0,0,0.8c-2.4,0.8-4.8,3.2-4.8,6.4v6.4c0,3.2,2.4,5.6,4.8,6.4c0,0,0,0,0,0.8
  c-1.6,1.6-2.4,4.8-0.8,7.2l3.2,5.6c1.6,2.4,4.8,4,7.2,3.2l0,0c-0.8,2.4,0,5.6,3.2,7.2l5.6,3.2c2.4,1.6,5.6,0.8,8-0.8c0,0,0,0,0.8,0
  c0.8,2.4,3.2,4.8,6.4,4.8h6.4c3.2,0,5.6-2.4,6.4-4.8c0,0,0,0,0.8,0c1.6,2.4,4.8,2.4,7.2,0.8l5.6-3.2c2.4-1.6,4-4.8,3.2-7.2l0,0
  c2.4,0.8,5.6,0,7.2-3.2l3.2-5.6c1.6-2.4,0.8-5.6-0.8-7.2c0,0,0,0,0-0.8c2.4-0.8,4.8-3.2,4.8-6.4v-6.4
  C264,133.6,262.4,131.2,259.2,130.4z"
      />
      <path
        style="fill:#5D6466;"
        d="M259.2,128C259.2,128,259.2,127.2,259.2,128c1.6-2.4,2.4-5.6,0.8-8l-3.2-5.6c-1.6-2.4-4.8-4-7.2-3.2
  l0,0c0.8-2.4,0-5.6-3.2-7.2l-5.6-3.2c-2.4-1.6-5.6-0.8-7.2,0.8c0,0,0,0-0.8,0c-0.8-2.4-3.2-4.8-6.4-4.8H220c-3.2,0-5.6,2.4-6.4,4.8
  c0,0,0,0-0.8,0c-1.6-2.4-4.8-2.4-8-0.8L200,104c-2.4,1.6-4,4.8-3.2,7.2l0,0c-2.4-0.8-5.6,0-7.2,3.2l-3.2,5.6
  c-1.6,2.4-0.8,5.6,0.8,7.2c0,0,0,0,0,0.8c-2.4,0.8-4.8,3.2-4.8,6.4v6.4c0,3.2,2.4,5.6,4.8,6.4c0,0,0,0,0,0.8
  c-1.6,1.6-2.4,4.8-0.8,7.2l3.2,5.6c1.6,2.4,4.8,4,7.2,3.2l0,0c-0.8,2.4,0,5.6,3.2,7.2l5.6,3.2c2.4,1.6,5.6,0.8,8-0.8c0,0,0,0,0.8,0
  c0.8,2.4,3.2,4.8,6.4,4.8h6.4c3.2,0,5.6-1.6,6.4-4.8c0,0,0,0,0.8,0c1.6,1.6,4.8,2.4,7.2,0.8l5.6-3.2c2.4-1.6,4-4.8,3.2-7.2l0,0
  c2.4,0.8,5.6,0,7.2-3.2l3.2-5.6c1.6-2.4,0.8-5.6-0.8-7.2c0,0,0,0,0-0.8c2.4-0.8,4.8-3.2,4.8-6.4v-6.4
  C264,131.2,262.4,128.8,259.2,128z"
      />
      <path
        style="fill:#4B5556;"
        d="M259.2,128C259.2,128,259.2,127.2,259.2,128c1.6-2.4,2.4-5.6,0.8-8l-3.2-5.6c-1.6-2.4-4.8-4-7.2-3.2
  l0,0c0.8-2.4,0-5.6-3.2-7.2l-5.6-3.2c-2.4-1.6-5.6-0.8-7.2,0.8c0,0,0,0-0.8,0c-0.8-2.4-3.2-4.8-6.4-4.8H220c-3.2,0-5.6,2.4-6.4,4.8
  c0,0,0,0-0.8,0c-1.6-2.4-4.8-2.4-8-0.8L200,104c-2.4,1.6-4,4.8-3.2,7.2l0,0l52.8,52.8l0,0c2.4,0.8,5.6,0,7.2-3.2l3.2-5.6
  c1.6-2.4,0.8-5.6-0.8-7.2c0,0,0,0,0-0.8c2.4-0.8,4.8-3.2,4.8-6.4v-6.4C264,131.2,262.4,128.8,259.2,128z"
      />
      <path
        style="fill:#566366;"
        d="M223.2,115.2c12.8,0,22.4,9.6,23.2,22.4c0-0.8,0-0.8,0-1.6c0-12.8-10.4-24-24-24
  c-12.8,0-24,10.4-24,24c0,0.8,0,0.8,0,1.6C200.8,124.8,211.2,115.2,223.2,115.2z"
      />
      <path
        style="fill:#424B4C;"
        d="M223.2,113.6c-12.8,0-24,10.4-24,24c0,8,4,24.8,9.6,37.6c1.6,0,3.2-0.8,4.8-1.6c0,0,0,0,0.8,0
  c0.8,2.4,3.2,4.8,6.4,4.8h6.4c3.2,0,5.6-1.6,6.4-4.8c0,0,0,0,0.8,0c0.8,0.8,2.4,1.6,4.8,1.6c5.6-12.8,9.6-29.6,9.6-37.6
  C247.2,124,236.8,113.6,223.2,113.6z"
      />
      <circle style="fill:#121C1B;" cx="223.2" cy="137.6" r="24" />
      <path
        style="fill:#283538;"
        d="M206.4,153.6c-9.6-9.6-9.6-24,0-33.6c9.6-9.6,24-9.6,33.6,0"
      />
      <path
        style="fill:#121C1B;"
        d="M224.8,126.4c0,0.8-0.8,1.6-1.6,1.6l0,0c-0.8,0-1.6-0.8-1.6-1.6v-4.8c0-0.8,0.8-1.6,1.6-1.6l0,0
  c0.8,0,1.6,0.8,1.6,1.6V126.4z"
      />
      <path
        style="fill:#EAAE1B;"
        d="M224.8,124c0,0.8-0.8,1.6-1.6,1.6l0,0c-0.8,0-1.6-0.8-1.6-1.6v-4.8c0-0.8,0.8-1.6,1.6-1.6l0,0
  c0.8,0,1.6,0.8,1.6,1.6V124z"
      />
      <rect x="284.8" y="133.6" style="fill:#A8750F;" width="72" height="56" />
      <path
        style="fill:#121C1B;"
        d="M356.8,130.4L356.8,130.4c1.6-2.4,2.4-5.6,0.8-8l-3.2-5.6c-1.6-2.4-4.8-4-7.2-3.2l0,0
  c0.8-2.4,0-5.6-3.2-7.2l-5.6-3.2c-2.4-1.6-5.6-0.8-7.2,0.8c0,0,0,0-0.8,0c-0.8-2.4-3.2-4.8-6.4-4.8h-6.4c-3.2,0-5.6,2.4-6.4,4.8
  c0,0,0,0-0.8,0c-1.6-2.4-4.8-2.4-8-0.8l-5.6,3.2c-2.4,1.6-4,4-3.2,7.2l0,0c-2.4-0.8-5.6,0-7.2,3.2l-3.2,5.6
  c-1.6,2.4-0.8,5.6,0.8,7.2c0,0,0,0,0,0.8c-2.4,0.8-4.8,3.2-4.8,6.4v6.4c0,3.2,2.4,5.6,4.8,6.4c0,0,0,0,0,0.8
  c-1.6,1.6-2.4,4.8-0.8,7.2l3.2,5.6c1.6,2.4,4.8,4,7.2,3.2l0,0c-0.8,2.4,0,5.6,3.2,7.2l5.6,3.2c2.4,1.6,5.6,0.8,8-0.8c0,0,0,0,0.8,0
  c0.8,2.4,3.2,4.8,6.4,4.8h6.4c3.2,0,5.6-2.4,6.4-4.8c0,0,0,0,0.8,0c1.6,2.4,4.8,2.4,7.2,0.8l5.6-3.2c2.4-1.6,4-4.8,3.2-7.2l0,0
  c2.4,0.8,5.6,0,7.2-3.2l3.2-5.6c1.6-2.4,0.8-5.6-0.8-7.2c0,0,0,0,0-0.8c2.4-0.8,4.8-3.2,4.8-6.4v-6.4
  C361.6,133.6,359.2,131.2,356.8,130.4z"
      />
      <path
        style="fill:#5D6466;"
        d="M356.8,128C356.8,128,356.8,127.2,356.8,128c1.6-2.4,2.4-5.6,0.8-8l-3.2-5.6c-1.6-2.4-4.8-4-7.2-3.2
  l0,0c0.8-2.4,0-5.6-3.2-7.2l-5.6-3.2c-2.4-1.6-5.6-0.8-7.2,0.8c0,0,0,0-0.8,0c-0.8-2.4-3.2-4.8-6.4-4.8h-6.4c-3.2,0-5.6,2.4-6.4,4.8
  c0,0,0,0-0.8,0c-1.6-2.4-4.8-2.4-8-0.8l-4.8,3.2c-2.4,1.6-4,4.8-3.2,7.2l0,0c-2.4-0.8-5.6,0-7.2,3.2L284,120
  c-1.6,2.4-0.8,5.6,0.8,7.2c0,0,0,0,0,0.8c-2.4,0.8-4.8,3.2-4.8,6.4v6.4c0,3.2,2.4,5.6,4.8,6.4c0,0,0,0,0,0.8
  c-1.6,1.6-2.4,4.8-0.8,7.2l3.2,5.6c1.6,2.4,4.8,4,7.2,3.2l0,0c-0.8,2.4,0,5.6,3.2,7.2l5.6,3.2c2.4,1.6,5.6,0.8,8-0.8c0,0,0,0,0.8,0
  c0.8,2.4,3.2,4.8,6.4,4.8h6.4c3.2,0,5.6-1.6,6.4-4.8c0,0,0,0,0.8,0c1.6,1.6,4.8,2.4,7.2,0.8l5.6-3.2c2.4-1.6,4-4.8,3.2-7.2l0,0
  c2.4,0.8,5.6,0,7.2-3.2l3.2-5.6c1.6-2.4,0.8-5.6-0.8-7.2c0,0,0,0,0-0.8c2.4-0.8,4.8-3.2,4.8-6.4v-6.4
  C361.6,131.2,359.2,128.8,356.8,128z"
      />
      <path
        style="fill:#4B5556;"
        d="M356.8,128C356.8,128,356.8,127.2,356.8,128c1.6-2.4,2.4-5.6,0.8-8l-3.2-5.6c-1.6-2.4-4.8-4-7.2-3.2
  l0,0c0.8-2.4,0-5.6-3.2-7.2l-5.6-3.2c-2.4-1.6-5.6-0.8-7.2,0.8c0,0,0,0-0.8,0c-0.8-2.4-3.2-4.8-6.4-4.8h-6.4c-3.2,0-5.6,2.4-6.4,4.8
  c0,0,0,0-0.8,0c-1.6-2.4-4.8-2.4-8-0.8l-4.8,3.2c-2.4,1.6-4,4.8-3.2,7.2l0,0l52.8,52.8l0,0c2.4,0.8,5.6,0,7.2-3.2l3.2-5.6
  c1.6-2.4,0.8-5.6-0.8-7.2c0,0,0,0,0-0.8c2.4-0.8,4.8-3.2,4.8-6.4v-6.4C361.6,131.2,359.2,128.8,356.8,128z"
      />
      <path
        style="fill:#566366;"
        d="M320.8,115.2c12.8,0,22.4,9.6,23.2,22.4c0-0.8,0-0.8,0-1.6c0-12.8-10.4-24-24-24
  c-12.8,0-24,10.4-24,24c0,0.8,0,0.8,0,1.6C297.6,124.8,308,115.2,320.8,115.2z"
      />
      <path
        style="fill:#424B4C;"
        d="M320.8,113.6c-12.8,0-24,10.4-24,24c0,8,4,24.8,9.6,37.6c1.6,0,3.2-0.8,4.8-1.6c0,0,0,0,0.8,0
  c0.8,2.4,3.2,4.8,6.4,4.8h6.4c3.2,0,5.6-1.6,6.4-4.8c0,0,0,0,0.8,0c0.8,0.8,2.4,1.6,4.8,1.6c5.6-12.8,9.6-29.6,9.6-37.6
  C344,124,333.6,113.6,320.8,113.6z"
      />
      <circle style="fill:#121C1B;" cx="320.8" cy="137.6" r="24" />
      <path
        style="fill:#283538;"
        d="M304,153.6c-9.6-9.6-9.6-24,0-33.6c9.6-9.6,24-9.6,33.6,0"
      />
      <path
        style="fill:#121C1B;"
        d="M322.4,126.4c0,0.8-0.8,1.6-1.6,1.6l0,0c-0.8,0-1.6-0.8-1.6-1.6v-4.8c0-0.8,0.8-1.6,1.6-1.6l0,0
  c0.8,0,1.6,0.8,1.6,1.6V126.4z"
      />
      <path
        style="fill:#EAAE1B;"
        d="M322.4,124c0,0.8-0.8,1.6-1.6,1.6l0,0c-0.8,0-1.6-0.8-1.6-1.6v-4.8c0-0.8,0.8-1.6,1.6-1.6l0,0
  c0.8,0,1.6,0.8,1.6,1.6V124z"
      />
      <path
        style="fill:#E8C51C;"
        d="M86.4,172c0,3.2-2.4,6.4-6.4,6.4H55.2c-3.2,0-6.4-2.4-6.4-6.4v-41.6c0-3.2,2.4-6.4,6.4-6.4h25.6
  c3.2,0,6.4,2.4,6.4,6.4V172H86.4z"
      />
      <path
        style="fill:#A8750F;"
        d="M86.4,168.8c0,3.2-2.4,6.4-6.4,6.4H55.2c-3.2,0-6.4-2.4-6.4-6.4v-41.6c0-3.2,2.4-6.4,6.4-6.4h25.6
  c3.2,0,6.4,2.4,6.4,6.4v41.6H86.4z"
      />
      <path
        style="fill:#E21E36;"
        d="M86.4,160.8c0,3.2-2.4,6.4-6.4,6.4H55.2c-3.2,0-6.4-2.4-6.4-6.4v-41.6c0-3.2,2.4-6.4,6.4-6.4h25.6
  c3.2,0,6.4,2.4,6.4,6.4v41.6H86.4z"
      />
      <path
        style="fill:#BA0D1A;"
        d="M80.8,112.8c3.2,0,6.4,2.4,6.4,6.4v41.6c0,3.2-2.4,6.4-6.4,6.4H55.2c-3.2,0-6.4-2.4-6.4-6.4"
      />
      <circle style="fill:#4F3715;" cx="127.2" cy="137.6" r="16.8" />
      <path
        style="fill:#6D4F1B;"
        d="M127.2,131.2c-7.2,0-13.6,4.8-16,12c2.4,6.4,8,12,16,12c7.2,0,13.6-4.8,16-12
  C140.8,136,134.4,131.2,127.2,131.2z"
      />
      <g>
        <path
          style="fill:#A8750F;"
          d="M36.8,91.2h406.4c-4.8-5.6-12-9.6-20-9.6H56.8C48.8,82.4,41.6,85.6,36.8,91.2z"
        />
        <circle style="fill:#A8750F;" cx="380" cy="114.4" r="4" />
        <circle style="fill:#A8750F;" cx="396" cy="114.4" r="4" />
        <circle style="fill:#A8750F;" cx="411.2" cy="114.4" r="4" />
        <circle style="fill:#A8750F;" cx="427.2" cy="114.4" r="4" />
        <circle style="fill:#A8750F;" cx="380" cy="129.6" r="4" />
        <circle style="fill:#A8750F;" cx="396" cy="129.6" r="4" />
        <circle style="fill:#A8750F;" cx="411.2" cy="129.6" r="4" />
        <circle style="fill:#A8750F;" cx="427.2" cy="129.6" r="4" />
        <circle style="fill:#A8750F;" cx="380" cy="144.8" r="4" />
        <circle style="fill:#A8750F;" cx="396" cy="144.8" r="4" />
        <circle style="fill:#A8750F;" cx="411.2" cy="144.8" r="4" />
        <circle style="fill:#A8750F;" cx="427.2" cy="144.8" r="4" />
        <circle style="fill:#A8750F;" cx="380" cy="160" r="4" />
        <circle style="fill:#A8750F;" cx="396" cy="160" r="4" />
        <circle style="fill:#A8750F;" cx="411.2" cy="160" r="4" />
        <circle style="fill:#A8750F;" cx="427.2" cy="160" r="4" />
      </g>
      <g>
        <path
          style="fill:#101110;"
          d="M0,396c0,17.6,14.4,31.2,31.2,31.2h4v-32.8H0V396z"
        />
        <path
          style="fill:#101110;"
          d="M480,396c0,17.6-14.4,31.2-31.2,31.2h-4v-32.8H480V396z"
        />
      </g>
    </svg>
  `,
})
export class AmpliIconComponent {}
