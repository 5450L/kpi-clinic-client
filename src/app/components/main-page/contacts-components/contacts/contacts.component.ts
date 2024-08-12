import { Component } from '@angular/core';
import { ContactMapComponent } from "../contact-map/contact-map.component";

@Component({
  selector: 'contacts',
  standalone: true,
  imports: [ContactMapComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
