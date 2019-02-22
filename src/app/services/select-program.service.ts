import { SelectProgram } from '../models/Select-Program'; 
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';




@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  programCollection: AngularFirestoreCollection<SelectProgram>;
  programs: Observable<SelectProgram[]>;
  program: Observable<SelectProgram>;


  constructor(private afs: AngularFirestore) {
      
      
      this.programCollection = this.afs.collection('select_program');

   }

   getPrograms(): Observable<SelectProgram[]> {
       console.log("get selects");
     this.programs = this.programCollection.snapshotChanges()
     .map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as SelectProgram;
         data.id = action.payload.doc.id;
         
         return data;
         
       });

     });

    return this.programs;

   }

  

   
}
