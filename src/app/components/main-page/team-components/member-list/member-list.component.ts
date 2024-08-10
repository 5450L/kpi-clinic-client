import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MemberItemComponent } from "../member-item/member-item.component";

@Component({
  selector: 'member-list',
  standalone: true,
  imports: [MemberItemComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MemberListComponent {
}
