import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'burger-button',
  standalone: true,
  imports: [],
  templateUrl: './burger-button.component.html',
  styleUrl: './burger-button.component.scss'
})
export class BurgerButtonComponent implements OnInit {
  @Output() opened = new EventEmitter<boolean>();

  active = false;


  onBurgerClicked() {
    this.active = !this.active;
  }

  ngOnInit() {
    this.active = false;
  }
}
