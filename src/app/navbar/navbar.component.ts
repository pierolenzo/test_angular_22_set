import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Output() changedViewEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeView(value: string) {
    this.changedViewEvent.emit(value);
  }


}
