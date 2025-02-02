import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unit } from '../../models/unit.model';
import { ServiceUnitsService } from '../../services/service-units/service-units.service';
import { ServiceUnitsSymbols } from '../../enums/service-units';
import { PriceListComponent } from '../../components/prices-page/price-list/price-list.component';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { VertebrologyComponent } from '../../components/prices-page/prices-by-unit/vertebrology/vertebrology.component';
import { FunctionalDiagnosticsComponent } from '../../components/prices-page/prices-by-unit/functional-diagnostics/functional-diagnostics.component';
import { PsychologyComponent } from '../../components/prices-page/prices-by-unit/psychology/psychology.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-prices-page',
  standalone: true,
  imports: [
    PriceListComponent,
    CommonModule,
    VertebrologyComponent,
    FunctionalDiagnosticsComponent,
    PsychologyComponent,
    RouterOutlet,
  ],
  templateUrl: './prices-page.component.html',
  styleUrl: './prices-page.component.css',
})
export class PricesPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  selectedUnit?: Unit;
  serviceUnitsList?: Unit[];
  unitSymbolsEnum = ServiceUnitsSymbols;

  constructor(
    private serviceUnitsService: ServiceUnitsService,
    private router: Router
  ) {
    this.subscription = this.serviceUnitsService.selectedUnit$.subscribe(
      (unit) => (this.selectedUnit = unit)
    );
  }

  selectUnit(symbol: ServiceUnitsSymbols) {
    this.serviceUnitsService.selectItem(symbol);
    this.router.navigate([`prices/${symbol}`]);
  }

  //NOTICE: temporary doesnt have proper pricelist
  ngOnInit(): void {
    // this.serviceUnitsList = this.serviceUnitsService.getServiceUnits();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
