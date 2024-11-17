import { Component } from '@angular/core';
import { Unit } from '../../../../models/unit.model';
import { UnitManegerListOption } from '../../../../models/member.model';
import { TeamService } from '../../../../services/team/team.service';

@Component({
  selector: 'member-list-manager',
  standalone: true,
  imports: [],
  templateUrl: './member-list-manager.component.html',
  styleUrl: './member-list-manager.component.css',
})
export class MemberListManagerComponent {
  constructor(private teamService: TeamService) {}

  get selectedOption() {
    return this.teamService.getSelectedOption();
  }

  get optionsToSelect() {
    return this.teamService.getOptionsToSelect();
  }

  selectOption(option: UnitManegerListOption) {
    this.teamService.selectOption(option);
  }
}
