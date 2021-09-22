import { Component } from '@angular/core';
import { User } from 'src/models/Users';
import { data } from '../models/dati'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dhtest';
  data: User[] = data;
  listView: boolean = false;
  cardView: boolean = true;

  changeCardView(value: string) {
    if (value === 'listView') {
      this.listView = true;
      this.cardView = false;
    } else {
      this.listView = false;
      this.cardView = true;
    }
  }

}
