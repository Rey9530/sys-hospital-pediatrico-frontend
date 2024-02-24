import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  endpoint: String = environment.API_URL + "employees";
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(`${this.endpoint}`);
  }
  getOne(id: any) {
    return this.http.get(`${this.endpoint}/${id}`);
  }
  create(data: any, id: number) {
    if (id > 0) {
      return this.http.put(`${this.endpoint}/${id}`, data);
    } else {
      return this.http.post(`${this.endpoint}`, data);
    }
  }
  delete(id: any) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
  updatePrincipal(id: any) {
    return this.http.get(`${this.endpoint}/asignar_principal/${id}`);
  }
  getCatalogs() {
    return this.http.get(`${this.endpoint}/get/catalogs`);
  }
}
