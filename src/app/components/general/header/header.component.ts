import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainLogoComponent } from "../../common/main-logo/main-logo.component";
import { BurgerButtonComponent } from "../../common/burger-button/burger-button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainLogoComponent, BurgerButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {
  }

  goToMain() {
    this.router.navigate([``]);
  }

  openBurgerMenu() { }
}
