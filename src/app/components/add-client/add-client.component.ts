import { SelectProgram } from './../../models/Select-Program';
import { AngularFirestore } from 'angularfire2/firestore';
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, ɵChangeDetectorStatus } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { FlashMessagesService} from 'angular2-flash-messages';
import { ClientService} from 'src/app/services/client.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  programs: SelectProgram[] = [
    {index: '1', name: "I-130"},
    {index: '2', name: "I-130 | Welcome Letter"},
    {index: "3", name: "I-130 | 6019"},
    {index: "4", name: "I-130 | 485"},
    {index: "5", name: "I-485"},
    {index: '1', name: "N-400"},
    {index: '2', name: "U - Visa"},
    {index: "3", name: "VAWA"},
    {index: "4", name: "I-864"},
    {index: "5", name: "Investigations"},
    {index: "3", name: "DACA"},
    {index: "4", name: "I-601a"},
    {index: "5", name: "I-601"}
  ];

  selectedValue = '1';


  client: Client = {
    case: '',
    lastName: '',
    firstName: '',
    Street: '',
    City: '',
    State: '',
    ZIP: '',
    Phone: '',
    Email: '',
    docStatus: 'Office',
    registered: '',
    lastContact: '',
    program: 'test'
    
  }



  @ViewChild('clientForm') form: any;

  

  constructor(
    private flashMessage:FlashMessagesService,
    private clientService : ClientService,
    private router: Router
    ) { }

  ngOnInit() {
    

    console.log("test");
    this.client.registered = Date();
    this.client.lastContact = this.client.registered;
    this.client.lastContact.toDate();
    this.client.registered.toDate();

    
    
  }


  onSubmit({value,valid} : {value:Client, valid:boolean}) {

    if(!valid) {
      this.flashMessage.show('Please fill out the form completely', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      
      this.clientService.newClient(value);

      this.flashMessage.show('Client Added', {
        cssClass: 'alert-success', timeout: 4000
      });

      this.router.navigate(['/']);
    }
  }

}
