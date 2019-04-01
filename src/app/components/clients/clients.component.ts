import { Client } from './../../models/Client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { ModalComponent} from 'src/app/modal/modal.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  public searchText:string;
  modalRef: MDBModalRef;

  constructor(private clientService: ClientService
   ) { }

   

    
  ngOnInit() {
    this.clientService.getClients().subscribe(clients => this.clients = clients);
  }
  

}
