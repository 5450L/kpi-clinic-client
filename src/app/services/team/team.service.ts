import { Injectable } from '@angular/core';
import { Member } from '../../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private members: Member[] = [
    new Member('New Member1 Name', 'member position'),
    new Member('New Member2 Name', 'member position'),
    new Member('New Member4 Name', 'member position'),
    new Member('New Member5 Name', 'member position'),
    new Member('New Member6 Name', 'member position'),
  ]

  getMembers() {
    return this.members.slice()
  }
}
