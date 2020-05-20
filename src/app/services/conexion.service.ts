import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'; /*firestores 2 servicio*/
import { Observable } from 'rxjs'; /*firestore2 servicio*/

export interface Item { name: string; } /*firestore2 servicio*/

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConexionService {
/*firestore2 servicio ||  imprime id en consola*/
private itemsCollection: AngularFirestoreCollection<Item>;
items: Observable<Item[]>;

private itemDoc: AngularFirestoreDocument<Item>; /*firebase4||variable para eliminar*/

constructor(private afs: AngularFirestore) {
  this.itemsCollection = afs.collection<Item>('items');
  this.items = this.itemsCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Item;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
}
    listaItem() {
      return this.items;
  }

  /*firestore3 agrega nuevas colleciones Item*/
  AgregarItem(item: Item) {
    this.itemsCollection.add(item);
  }
  /*firestore3 agrega nuevas colleciones Item*/


  /*firestore4 */
  eliminarItem(item) {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);  /*firebase4|| comillas espaciales contenido dinamico*/
    this.itemDoc.delete();
  }
  /*firestore4 */


  /*firestore5 */
  EditarItem(item) {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);  /*firebase4|| comillas espaciales contenido dinamico*/
    this.itemDoc.update(item);
  }
  /*firestore5 */

}
/*firestore2 servicio*/
