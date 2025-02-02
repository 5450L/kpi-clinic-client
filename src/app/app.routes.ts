import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PricesPageComponent } from './pages/prices-page/prices-page.component';
import { VertebrologyComponent } from './components/prices-page/prices-by-unit/vertebrology/vertebrology.component';
import { ServiceUnitsSymbols } from './enums/service-units';
import { PsychologyComponent } from './components/prices-page/prices-by-unit/psychology/psychology.component';
import { FunctionalDiagnosticsComponent } from './components/prices-page/prices-by-unit/functional-diagnostics/functional-diagnostics.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { PricesEmptyComponent } from './components/prices-page/prices-empty/prices-empty.component';
import { RedirectToWarningGuard } from './services/guards/route-guards';

export const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  {
    path: 'prices',
    component: PricesPageComponent,
    children: [
      {
        path: ServiceUnitsSymbols.Vertebrology,
        component: VertebrologyComponent,
        canActivate: [RedirectToWarningGuard],
      },
      {
        path: ServiceUnitsSymbols.Psychology,
        component: PsychologyComponent,
        canActivate: [RedirectToWarningGuard],
      },
      {
        path: ServiceUnitsSymbols.FunctionalDiagnostics,
        component: FunctionalDiagnosticsComponent,
        canActivate: [RedirectToWarningGuard],
      },
      {
        path: ServiceUnitsSymbols.Ginecology,
        component: FunctionalDiagnosticsComponent,
        canActivate: [RedirectToWarningGuard],
      },
      {
        path: 'warning',
        component: PricesEmptyComponent,
      },
      {
        path: '',
        redirectTo: 'warning',
        pathMatch: 'full',
      },
    ],
  },
  { path: 'team', component: TeamPageComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
