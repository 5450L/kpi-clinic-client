import { Component } from '@angular/core';
import { MainPageSectionComponent } from '../../components/main-page/main-page-section/main-page-section.component';
import { ServiceUnitsListComponent } from '../../components/main-page/clinic-services-components/service-units-list/service-units-list.component';
import { MemberListComponent } from '../../components/main-page/team-components/member-list/member-list.component';
import { PageTitleComponent } from '../../components/main-page/page-title/page-title.component';

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [
    MainPageSectionComponent,
    ServiceUnitsListComponent,
    MemberListComponent,
    PageTitleComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {}
