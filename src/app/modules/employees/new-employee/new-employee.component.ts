import { Component, Input, OnInit } from '@angular/core';
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

  @Input() color: any;
  navSelected = "1";
  public editProfile: UntypedFormGroup;
  ngOnInit(): void {
    this.editProfile = this.fb.group({
      employe_code: [''],
      name_1: [''],
      name_2: [''],
      name_3: [''],
      surname_1: [''],
      surname_2: [''],
      surname_3: [''],
      gender: [''],
      birth_date: [''],
      start_date: [''],
      end_date: [''],
      address: [''],
      phone: [''],
      dui: [''],
      nit: [''],
      isss: [''],
      afp: [''],
      emp_hourly_wage: [''],
      emp_daily_wage: [''],
      emp_base_salary: [''],
      emp_viatic: [''],
      emp_complementary_diatic: [''],
      departament: [''],
      job_title: [''],
      job_type: [''],
      immediate_superior: [''],

    })
  }
  changeTab(valor: any) {
    this.navSelected = valor;
  }
}
