import { Component, Input, OnInit } from '@angular/core';
import { UnitListItem } from '../../../../models/units/unit.model';
import { BackgroundImagePipe } from "../../../../pipes/background-image.pipe";

@Component({
  selector: 'service-unit-list-item',
  standalone: true,
  imports: [BackgroundImagePipe],
  templateUrl: './service-unit-list-item.component.html',
  styleUrl: './service-unit-list-item.component.css'
})
export class ServiceUnitListItemComponent implements OnInit {
  @Input({ required: true }) unitListItem!: UnitListItem;

  ngOnInit(): void {
    console.log('unitListItem', this.unitListItem);
  }

}
