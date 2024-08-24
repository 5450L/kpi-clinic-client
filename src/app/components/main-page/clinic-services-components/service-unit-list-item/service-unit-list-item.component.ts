import { Component, Input, OnInit } from '@angular/core';
import { BackgroundImagePipe } from "../../../../pipes/background-image.pipe";
import { UnitListItem } from '../../../../models/unit.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'service-unit-list-item',
  standalone: true,
  imports: [RouterModule, BackgroundImagePipe],
  templateUrl: './service-unit-list-item.component.html',
  styleUrl: './service-unit-list-item.component.css'
})
export class ServiceUnitListItemComponent implements OnInit {
  @Input({ required: true }) unitListItem!: UnitListItem;

  ngOnInit(): void {
  }

}
