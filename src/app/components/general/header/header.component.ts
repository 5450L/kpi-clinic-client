import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainLogoComponent } from '../../common/main-logo/main-logo.component';
import { BurgerButtonComponent } from '../../common/burger-button/burger-button.component';
import { PhoneFormatterPipe } from '../../../pipes/phone-number.pipe';
import { CommonService } from '../../../services/common-service/common.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainLogoComponent, BurgerButtonComponent, PhoneFormatterPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  landlineNumber: string;
  mobileNumber: string;

  constructor(private router: Router, private commonService: CommonService) {
    this.landlineNumber = commonService.phoneNumbers.landline;
    this.mobileNumber = commonService.phoneNumbers.mobile;
  }

  goToMain() {
    this.router.navigate([``]);
  }

  openBurgerMenu() {}
}
