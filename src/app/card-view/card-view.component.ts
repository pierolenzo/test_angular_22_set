import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/Users';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.sass']
})
export class CardViewComponent implements OnInit {
  @Input() item!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
