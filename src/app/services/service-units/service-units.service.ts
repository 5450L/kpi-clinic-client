import { Injectable } from '@angular/core';
import { UnitListItem } from '../../models/unit.model';
import { ServiceUnitsSymbols } from '../../enums/service-units';

@Injectable({
  providedIn: 'root'
})
export class ServiceUnitsService {

  private serviceUnits: UnitListItem[] = [
    {
      name: 'Вертебрологія, мануальна терапія, редкорд терапія',
      symbol: ServiceUnitsSymbols.Vertebrology,
      image: 'https://armhealth.am/wp-content/uploads/2023/04/1655961793-1.jpg'
    },
    {
      name: 'Функціональна діагностика',
      symbol: ServiceUnitsSymbols.FunctionalDiagnostics,
      image: 'https://mindd.org/wp-content/uploads/2018/06/Functional-Medicine-testing.jpg'
    },
    {
      name: 'Психологія, психіатрія, наркологія',
      symbol: ServiceUnitsSymbols.Psychology,
      image:
        'https://expathy.s3.us-east-2.amazonaws.com/wp-content/uploads/2024/02/15091114/social-psychologist-1.jpeg'
    }
  ]

  getServiceUnits() {
    return this.serviceUnits.slice()
  }

}
