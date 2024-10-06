import { Injectable } from '@angular/core';
import { Member } from '../../models/member.model';
import { ServiceUnitsSymbols } from '../../enums/service-units';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private members: Member[] = [
    new Member({
      name: 'Наталья Сідоренко',
      position: 'Медичний реєстратор',
      photo: 'assets/images/members/natalia-sidorenko.png',
    }),
    new Member({
      name: 'Олександра Остапенко',
      position: 'Психотерапевт',
      unit: ServiceUnitsSymbols.Psychology,
      photo: 'assets/images/members/olexandra-ostapenko.png',
    }),
    new Member({
      name: 'Валерія Пономарьова',
      position: 'Психотерапевт',
      unit: ServiceUnitsSymbols.Psychology,
      photo: 'assets/images/members/valeria-ponomareva.png',
    }),
    new Member({
      name: 'Софія Балаклицька',
      position: 'Масажист',
      unit: ServiceUnitsSymbols.Vertebrology,
      photo: 'assets/images/members/sophia-balaklicka.png',
    }),
    new Member({
      name: "Олександра Астаф'єва",
      position: 'Медична сестра',
      photo: 'assets/images/members/olexandra-astafieva.png',
    }),
  ];

  getMembers() {
    return this.members.slice();
  }
}
