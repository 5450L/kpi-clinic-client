import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MemberItemComponent } from "../member-item/member-item.component";
import { Member } from '../../../../models/member.model';
@Component({
  selector: 'member-list',
  standalone: true,
  imports: [MemberItemComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MemberListComponent {

  memberList = [
    new Member('New Member1 Name', 'member position'),
    new Member('New Member2 Name', 'member position'),
    new Member('New Member4 Name', 'member position'),
    new Member('New Member5 Name', 'member position'),
    new Member('New Member6 Name', 'member position'),
  ]

  breakpoints = {
    1: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
}
