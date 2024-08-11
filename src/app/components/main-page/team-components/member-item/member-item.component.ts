import { Component, Input } from '@angular/core';
import { Member } from '../../../../models/member.model';

@Component({
  selector: 'member-item',
  standalone: true,
  imports: [],
  templateUrl: './member-item.component.html',
  styleUrl: './member-item.component.css'
})
export class MemberItemComponent {
  @Input({ required: true }) member!: Member

 

}
