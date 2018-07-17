import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInputComponent } from './modal-input.component';

describe('ModalInputComponent', () => {
  let component: ModalInputComponent;
  let fixture: ComponentFixture<ModalInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
