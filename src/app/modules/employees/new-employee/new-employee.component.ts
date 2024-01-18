import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styles: ``
})
export class NewEmployeeComponent implements OnInit {

  model2: NgbDateStruct;
  model3: NgbDateStruct;
  model4: NgbDateStruct;
  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.editProfile = this.fb.group({
      company: [''],
      userName: [''],
      email: ['', Validators.email],
      firstName: [''],
      lastName: [''],
      address: [''],
      city: [''],
      zipCode: [null],
      country: [''],
      about: ['']
    })
  }
  public editProfile: UntypedFormGroup;

}
