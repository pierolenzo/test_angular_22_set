import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/models/Users';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.sass']
})
export class ListViewComponent implements OnInit {
  @Input() item!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
