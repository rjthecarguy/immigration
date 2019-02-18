import { Component, OnInit, ɵChangeDetectorStatus } from '@angular/core';
import { Client } from 'src/app/models/Client';

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

  constructor() { }

  ngOnInit() {
  }

}
