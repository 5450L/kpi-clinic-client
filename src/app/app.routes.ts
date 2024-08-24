import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PricesPageComponent } from './pages/prices-page/prices-page.component';
import { PriceListComponent } from './components/prices-page/price-list/price-list.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent, pathMatch: 'full' },
    {
        path: 'prices', component: PricesPageComponent, children: [
            {
                path: 'price-list',
                component: PriceListComponent,

            },
        ]
    },
    { path: '**', redirectTo: '' }
];
