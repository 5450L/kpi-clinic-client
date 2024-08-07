import { Component } from '@angular/core';
import { MainPageSectionComponent } from '../../components/main-page/main-page-section/main-page-section.component';
import { ServiceUnitsListComponent } from "../../components/main-page/clinic-services-components/service-units-list/service-units-list.component";

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [MainPageSectionComponent, ServiceUnitsListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
