import { Component, OnInit } from '@angular/core';

import {
  EmployesService
} from "src/app/shared/services";

import { Employee, EmployesInterface } from '../interfaces/employes_response.interface';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: ``
})
export class IndexComponent implements OnInit {
  employyes: Employee[] = [];
  loading: Boolean = false;
  constructor(
    private service: EmployesService,
  ) {
  }
  ngOnInit(): void {
    this.getAllEmployees();
  }


  getAllEmployees() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (value: EmployesInterface) => {
        this.employyes = value.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
