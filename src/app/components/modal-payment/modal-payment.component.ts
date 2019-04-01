import { Component, OnInit, NgModule, Inject } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Subscription } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';






@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.css']
})

export class ModalPaymentComponent implements OnInit {
  openDiv: boolean = false;
  message: any;
  subscription: Subscription;
  closeResult: string;
  
  constructor(
    private messageService: MessageService,
    private modalService: NgbModal,
    public dialog: MatDialog
  ) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.openDiv = !this.openDiv;

      

           });
   }

  

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

