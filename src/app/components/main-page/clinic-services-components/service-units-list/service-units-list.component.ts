import { Component } from '@angular/core';
import { UnitListItem } from '../../../../models/units/unit.model';
import { ServiceUnitListItemComponent } from "../service-unit-list-item/service-unit-list-item.component";

@Component({
  selector: 'service-units-list',
  standalone: true,
  imports: [ServiceUnitListItemComponent],
  templateUrl: './service-units-list.component.html',
  styleUrl: './service-units-list.component.css'
})
export class ServiceUnitsListComponent {

  serviceUnitsList: UnitListItem[] = [
    { name: 'Вертебрологія, мануальна терапія, редкорд терапія', image: 'https://armhealth.am/wp-content/uploads/2023/04/1655961793-1.jpg' },
    { name: 'Функціональна діагностика', image: 'https://mindd.org/wp-content/uploads/2018/06/Functional-Medicine-testing.jpg' },
    { name: 'Психологія, психіатрія, наркологія', image: 'https://expathy.s3.us-east-2.amazonaws.com/wp-content/uploads/2024/02/15091114/social-psychologist-1.jpeg' }
  ]

}
