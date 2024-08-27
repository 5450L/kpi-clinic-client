import { Component, OnInit } from '@angular/core';
import { ServiceUnitListItemComponent } from "../service-unit-list-item/service-unit-list-item.component";
import { Unit } from '../../../../models/unit.model';
import { ServiceUnitsService } from '../../../../services/service-units/service-units.service';

@Component({
  selector: 'service-units-list',
  standalone: true,
  imports: [ServiceUnitListItemComponent],
  templateUrl: './service-units-list.component.html',
  styleUrl: './service-units-list.component.css'
})
export class ServiceUnitsListComponent implements OnInit {

  serviceUnitsList: Unit[] = []

  constructor(private serviceUnitsService: ServiceUnitsService) { }

  ngOnInit(): void {
    this.serviceUnitsList = this.serviceUnitsService.getServiceUnits()
  }
}
