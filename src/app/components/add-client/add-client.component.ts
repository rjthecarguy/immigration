import { Component, OnInit, ViewChild, ɵChangeDetectorStatus } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {


  clinet: Client = {
    case: '',
    lastName: '',
    firstName: '',
    Street: '',
    City: '',
    State: '',
    ZIP: '',
    Phone: '',
    Email: '',
    docStatus: ''
    
  }

  @ViewChild('clientForm') form: any;

  

  constructor(private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }


  onSubmit({value,valid} : {value:Client, valid:boolean}) {

    if(!valid) {
      this.flashMessage.show('Please fill out the form completely', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      this.flashMessage.show('Client Added', {
        cssClass: 'alert-success', timeout: 4000
      });
    }
  }

}
