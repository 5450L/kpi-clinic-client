import { Component, OnDestroy } from '@angular/core';
import { ServiceUnitsService } from '../../../services/service-units/service-units.service';
import { Subscription } from 'rxjs';
import { Unit } from '../../../models/unit.model';

@Component({
  selector: 'price-list',
  standalone: true,
  imports: [],
  templateUrl: './price-list.component.html',
  styleUrl: './price-list.component.css'
})
export class PriceListComponent implements OnDestroy {

  private subscription: Subscription;
  selectedUnit?: Unit;

  constructor(private serviceUnitsService: ServiceUnitsService) {
    this.subscription = this.serviceUnitsService.selectedUnit$.subscribe(unit => this.selectedUnit = unit)
  }


  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
