import { Client } from './../models/Client';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';






@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientCollection: AngularFirestoreCollection<Client>;
  clinetDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;


  constructor(private afs: AngularFirestore) {

      this.clientCollection = this.afs.collection('clients');

   }

   getClients(): Observable<Client[]> {
     this.clients = this.clientCollection.snapshotChanges()
     .map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as Client;
         data.id = action.payload.doc.id;
         return data;
       });

     });

    return this.clients;

   }

   newClient(client:Client) {
     this.clientCollection.add(client);
   }
}
