import { Component, OnInit } from '@angular/core';
import { UnitListItem } from '../../models/unit.model';
import { ServiceUnitsService } from '../../services/service-units/service-units.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-prices-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './prices-page.component.html',
  styleUrl: './prices-page.component.css'
})
export class PricesPageComponent implements OnInit {

  serviceUnitsList: UnitListItem[] = []

  constructor(private serviceUnitsService: ServiceUnitsService) { }

  ngOnInit(): void {
    this.serviceUnitsList = this.serviceUnitsService.getServiceUnits()
  }
}
