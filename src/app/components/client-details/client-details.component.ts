import { MessageService } from 'src/app/services/message.service';
import { ModalPaymentComponent } from './../modal-payment/modal-payment.component';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from './../../models/Client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';






@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id:string;
  client: Client;
  showPaymentInput : boolean = false;
  closeResult: string;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
      console.log(this.client);
    });
  }
  
  onDelete()
  {
    
  }

  open() {
  
    this.messageService.sendMessage("true");
    
  }



  


}