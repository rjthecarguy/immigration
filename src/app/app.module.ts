import { GrdFilterPipe } from './pipes/grd-filter.pipe';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatNativeDateModule, MatDialog, MatDialogModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ModalModule, WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { ModalComponent } from './modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { TooltipModule, PopoverModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { EnterPaymentComponent } from './components/enter-payment/enter-payment.component';








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    SidebarComponent,
    AddClientComponent,
    EditClientComponent,
    ClientDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent,
    GrdFilterPipe,
    ModalComponent,
    EnterPaymentComponent
    
   
 
   
    
    
    
    
    
  ],

  

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    NgbModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MDBBootstrapModule,
    TooltipModule,
    PopoverModule,
    ReactiveFormsModule
    
    
   
    

  ],

  entryComponents: [ ModalComponent ],

  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
