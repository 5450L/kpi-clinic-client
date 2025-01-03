import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MemberItemComponent } from '../member-item/member-item.component';
import { Member } from '../../../../models/member.model';
import { TeamService } from '../../../../services/team/team.service';
import { MemberListManagerComponent } from '../member-list-manager/member-list-manager.component';
@Component({
  selector: 'member-list',
  standalone: true,
  imports: [MemberItemComponent, MemberListManagerComponent],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MemberListComponent {
  constructor(private teamService: TeamService) {}

  breakpoints = {
    1: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  };

  autoplay = {
    delay: 1000,
  };

  get memberList() {
    return this.teamService.getMembersByUnit();
  }
}
