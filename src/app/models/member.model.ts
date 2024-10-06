import { ServiceUnitsSymbols } from '../enums/service-units';

const PHOTO_PLACEHOLDER = 'assets/images/members/member-photo-placeholder.jpg';

export class Member {
  public name: string;
  public position: string;
  public unit: string;
  public photo: string;

  constructor({
    name = '',
    position = '',
    unit = ServiceUnitsSymbols.Administration,
    photo = PHOTO_PLACEHOLDER,
  }) {
    this.name = name;
    this.position = position;
    this.unit = unit;
    this.photo = photo;
  }
}
