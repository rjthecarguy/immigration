import { Payment } from './../models/Payment';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';






@Injectable({
    providedIn: 'root'
})

export class PaymetService {

    paymentCollection: AngularFirestoreCollection<Payment>;
    paymentDoc: AngularFirestoreDocument<Payment>;
    payments: Observable<Payment[]>;
    payment: Observable<Payment>;


    constructor(private afs: AngularFirestore) {
      
      
        this.paymentCollection = this.afs.collection('clients');
  
     }


newPayment(payment:Payment) {
        this.paymentCollection.add(payment);
      }
  
}