import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-page-section',
  standalone: true,
  imports: [],
  templateUrl: './main-page-section.component.html',
  styleUrl: './main-page-section.component.css'
})
export class MainPageSectionComponent {
  @Input() title: string = '';

}
