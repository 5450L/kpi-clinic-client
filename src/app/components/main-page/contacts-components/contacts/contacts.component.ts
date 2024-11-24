import { Component } from '@angular/core';
import { ContactMapComponent } from '../contact-map/contact-map.component';
import { PhoneFormatterPipe } from '../../../../pipes/phone-number.pipe';
import { CommonService } from '../../../../services/common-service/common.service';

@Component({
  selector: 'contacts',
  standalone: true,
  imports: [ContactMapComponent, PhoneFormatterPipe],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  landlineNumber: string;
  mobileNumber: string;

  constructor(private commonService: CommonService) {
    this.landlineNumber = commonService.phoneNumbers.landline;
    this.mobileNumber = commonService.phoneNumbers.mobile;
  }
}
