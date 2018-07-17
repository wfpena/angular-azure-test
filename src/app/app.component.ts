import { Component , Input , OnInit } from '@angular/core';
import {NgbModal , NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalInputComponent} from './modal-input/modal-input.component'
import { PeopleServiceService } from './people-service.service'

//import {ModalTestComponent} from './modal-test/modal-test.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  constructor(private modalService: NgbModal, private _peopleService: PeopleServiceService) {}

  public people = [];
  ngOnInit() {
      this._peopleService.getPeople()
      .subscribe(data => this.people = data);

  }

// open() {
//     const modalRef = this.modalService.open(NgbdModalContent);
//     modalRef.componentInstance.name = 'World';
//   }
  openModal(id){
  	//this.modal.open(content);
    const modalRef = this.modalService.open(ModalInputComponent);
    modalRef.componentInstance.name = id;
    //modalRef.componentInstance.person = person;
  }

}