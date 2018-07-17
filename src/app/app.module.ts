import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule , routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalTestComponent } from './modal-test/modal-test.component';
import { ModalInputComponent } from './modal-input/modal-input.component';
import {PeopleServiceService} from './people-service.service'
import {SelectModule} from 'ng2-select';
import { FormsModule } from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../environments/environment';
import { NewCompoComponent } from './new-compo/new-compo.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NotFoundComponent,
    DepartmentDetailComponent,
    ModalTestComponent,
    ModalInputComponent,
    AppNavbarComponent,
    NewCompoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    NgSelectModule,
   // SelectModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [PeopleServiceService],
  bootstrap: [AppComponent],
  entryComponents: [ModalInputComponent]
})
export class AppModule { }
