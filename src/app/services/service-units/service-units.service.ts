import { Injectable } from '@angular/core';
import { Unit } from '../../models/unit.model';
import { ServiceUnitsSymbols } from '../../enums/service-units';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceUnitsService {
  private serviceUnits: Unit[] = [
    {
      name: 'Вертебрологія, мануальна терапія, редкорд терапія',
      shortName: 'Вертебрологія',
      symbol: ServiceUnitsSymbols.Vertebrology,
      image: 'https://armhealth.am/wp-content/uploads/2023/04/1655961793-1.jpg',
    },
    {
      name: 'Функціональна діагностика',
      shortName: 'Функціональна діагностика',
      symbol: ServiceUnitsSymbols.FunctionalDiagnostics,
      image:
        'https://mindd.org/wp-content/uploads/2018/06/Functional-Medicine-testing.jpg',
    },
    {
      name: 'Психологія, психіатрія, наркологія',
      shortName: 'Психологія',
      symbol: ServiceUnitsSymbols.Psychology,
      image:
        'https://expathy.s3.us-east-2.amazonaws.com/wp-content/uploads/2024/02/15091114/social-psychologist-1.jpeg',
    },
    {
      name: 'Гінекологія',
      shortName: 'Гінекологія',
      symbol: ServiceUnitsSymbols.Ginecology,
      image:
        'https://www.yashodahealthcare.com/blogs/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-08-at-18.02.26.jpeg',
    },
  ];

  private selectedUnitSubject = new BehaviorSubject<Unit>(this.serviceUnits[0]);
  selectedUnit$ = this.selectedUnitSubject.asObservable();

  selectItem(symbol: ServiceUnitsSymbols) {
    this.selectedUnitSubject.next(
      this.serviceUnits.find((unit) => unit.symbol == symbol) ||
        this.serviceUnits[0]
    );
  }

  getServiceUnits() {
    return this.serviceUnits.slice();
  }
}
