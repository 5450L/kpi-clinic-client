import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  readonly phoneNumbers = { mobile: '+380509716014', landline: '7041626' };

  constructor() {}
}
