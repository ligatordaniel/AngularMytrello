import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore'; //firebase
import { Observable } from 'rxjs';//firebase


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*firebase*/
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }
  /*firebase*/
}
