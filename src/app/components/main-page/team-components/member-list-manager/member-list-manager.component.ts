import { Component } from '@angular/core';
import { ServiceUnitsService } from '../../../../services/service-units/service-units.service';
import { ServiceUnitsSymbols } from '../../../../enums/service-units';
import { Unit } from '../../../../models/unit.model';

type UnitManegerListOption = {
  name: string;
  description: string;
  symbol?: ServiceUnitsSymbols;
};

@Component({
  selector: 'member-list-manager',
  standalone: true,
  imports: [],
  templateUrl: './member-list-manager.component.html',
  styleUrl: './member-list-manager.component.css',
})
export class MemberListManagerComponent {
  allUnitsOption: UnitManegerListOption = {
    name: 'Всі співробітники',
    description: 'Всі співробітники',
  };

  memberListManagerOptions: UnitManegerListOption[] = [this.allUnitsOption];
  selectedOption: UnitManegerListOption = this.allUnitsOption;

  constructor(private serviceUnitsService: ServiceUnitsService) {}

  ngOnInit(): void {
    this.fillManagerOptions(
      this.serviceUnitsService.getServiceUnits(),
      this.memberListManagerOptions
    );
  }

  get optionsToSelect() {
    return this.memberListManagerOptions.filter(
      ({ name }) => name != this.selectedOption.name
    );
  }

  selectOption(option: UnitManegerListOption) {
    this.selectedOption = option;
  }

  fillManagerOptions(units: Unit[], optionsArray: UnitManegerListOption[]) {
    optionsArray.push(
      ...units.map(({ shortName, description, symbol }) => {
        return { name: shortName, description, symbol };
      })
    );
  }
}
