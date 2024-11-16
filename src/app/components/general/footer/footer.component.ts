import { Component } from '@angular/core';
import { ContactsComponent } from '../../main-page/contacts-components/contacts/contacts.component';
import { MainPageSectionComponent } from '../../main-page/main-page-section/main-page-section.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MainPageSectionComponent, ContactsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
