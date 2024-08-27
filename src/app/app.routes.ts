import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PricesPageComponent } from './pages/prices-page/prices-page.component';
import { VertebrologyComponent } from './components/prices-page/prices-by-unit/vertebrology/vertebrology.component';
import { ServiceUnitsSymbols } from './enums/service-units';
import { PsychologyComponent } from './components/prices-page/prices-by-unit/psychology/psychology.component';
import { FunctionalDiagnosticsComponent } from './components/prices-page/prices-by-unit/functional-diagnostics/functional-diagnostics.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent, pathMatch: 'full' },
    {
        path: 'prices', component: PricesPageComponent, children: [
            {
                path: ServiceUnitsSymbols.Vertebrology,
                component: VertebrologyComponent,
            },
            {
                path: ServiceUnitsSymbols.Psychology,
                component: PsychologyComponent,
            },
            {
                path: ServiceUnitsSymbols.FunctionalDiagnostics,
                component: FunctionalDiagnosticsComponent,
            },
        ]
    },
    { path: '**', redirectTo: '' }
];
