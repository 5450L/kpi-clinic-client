import { Component } from '@angular/core';

@Component({
  selector: 'page-title',
  standalone: true,
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.css',
})
export class PageTitleComponent {
  title: string = 'Університетська Клініка "ХПІ"';
}
