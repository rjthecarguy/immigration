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
    registered: ''
    
  }

 

  @ViewChild('clientForm') form: any;

  

  constructor(
    private flashMessage:FlashMessagesService,
    private clientService : ClientService,
    private router: Router
    ) { }

  ngOnInit() {
    
    this.client.registered = new Date();
    this.client.lastContact = new Date();

    
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
