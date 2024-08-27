import { Component, Input, OnInit } from '@angular/core';
import { BackgroundImagePipe } from "../../../../pipes/background-image.pipe";
import { Unit } from '../../../../models/unit.model';
import { Router, RouterModule } from '@angular/router';
import { ServiceUnitsSymbols } from '../../../../enums/service-units';
import { ServiceUnitsService } from '../../../../services/service-units/service-units.service';

@Component({
  selector: 'service-unit-list-item',
  standalone: true,
  imports: [RouterModule, BackgroundImagePipe],
  templateUrl: './service-unit-list-item.component.html',
  styleUrl: './service-unit-list-item.component.css'
})
export class ServiceUnitListItemComponent implements OnInit {
  @Input({ required: true }) unitListItem!: Unit;

  constructor(private serviceUnitsService: ServiceUnitsService, private router: Router) { }

  selectUnit(symbol: ServiceUnitsSymbols) {
    this.serviceUnitsService.selectItem(symbol)
    this.router.navigate([`prices/${symbol}`]);
  }

  ngOnInit(): void {
  }

}
