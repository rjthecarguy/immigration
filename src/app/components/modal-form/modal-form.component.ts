import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
selector: 'modal-form',
templateUrl: './modal-form.component.html',
styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent {
loginFormModalEmail = new FormControl('', Validators.email);
loginFormModalPassword = new FormControl('', Validators.required);
}