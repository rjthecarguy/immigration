import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.css']
})
export class ModalPaymentComponent implements OnInit {
  openDiv: boolean = false;
  message: any;
  subscription: Subscription;

  constructor(
    private messageService: MessageService
  ) {
    this.subscription = this.messageService.getMessage().subscribe(message => { this.openDiv = !this.openDiv; });
   }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
