import { Injectable } from '@angular/core';
import { Member, UnitManegerListOption } from '../../models/member.model';
import { ServiceUnitsSymbols } from '../../enums/service-units';
import { ServiceUnitsService } from '../service-units/service-units.service';

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
      name: 'Радишевська Лілія Марківна',
      position: 'Акуше́р-гінеко́лог',
      unit: ServiceUnitsSymbols.Ginecology,
      photo: 'assets/images/members/radyshevska-lilia.png',
    }),
    new Member({
      name: 'Крисько Дмитро',
      position: 'Фізичний терапевт',
      unit: ServiceUnitsSymbols.Vertebrology,
      photo: 'assets/images/members/krysko-dmytro.png',
    }),
    new Member({
      name: 'Софія Балаклицька',
      position: 'Масажист',
      unit: ServiceUnitsSymbols.Vertebrology,
      photo: 'assets/images/members/sophia-balaklicka.png',
    }),
    new Member({
      name: 'Яковенко Станіслав',
      position: 'Масажист',
      unit: ServiceUnitsSymbols.Vertebrology,
      photo: 'assets/images/members/yakovenko-stanislav.png',
    }),
    new Member({
      name: "Олександра Астаф'єва",
      position: 'Медична сестра',
      photo: 'assets/images/members/olexandra-astafieva.png',
    }),
  ];

  private allUnitsOption: UnitManegerListOption = {
    name: 'Всі співробітники',
    description: 'ОПИС ЗАГАЛЬНИЙ',
  };
  private memberListManagerOptions: UnitManegerListOption[] = [];
  private selectedOption: UnitManegerListOption = this.allUnitsOption;

  constructor(private serviceUnitsService: ServiceUnitsService) {
    this.memberListManagerOptions = [
      this.allUnitsOption,
      ...this.serviceUnitsService
        .getServiceUnits()
        .map(({ shortName, description, symbol }): UnitManegerListOption => {
          return { name: shortName, description, symbol };
        })
        .filter((unit) =>
          this.getMembers().some((member) => member.unit === unit.symbol)
        ),
    ];
  }

  getMembers() {
    return this.members.slice();
  }

  getMembersByUnit() {
    const selectedUnitSymbol = this.selectedOption.symbol;

    if (selectedUnitSymbol)
      return this.getMembers().filter(
        ({ unit }) => unit === selectedUnitSymbol
      );
    return this.getMembers();
  }

  getSelectedOption() {
    return Object.assign({}, this.selectedOption);
  }

  getOptionsToSelect() {
    return this.memberListManagerOptions
      .filter(({ name }) => name != this.selectedOption.name)
      .sort((optionA, optionB) => (optionA.name < optionB.name ? -1 : 1));
  }

  selectOption(option: UnitManegerListOption) {
    this.selectedOption = option;
  }
}
