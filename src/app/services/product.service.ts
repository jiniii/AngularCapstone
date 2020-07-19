import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Products } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(`${environment.apiUrl}/Products`);
  }

  deleteProduct(id) {
    return this.http.delete(`${environment.apiUrl}/Products/${id}`);
  }

  addProduct(data) {
    return this.http.post(`${environment.apiUrl}/Products/`, data);
  }

  update(id, data) {
    return this.http.put(`${environment.apiUrl}/Products/${id}`, data)
  }
  buyProduct(data) {
    return this.http.post(`${environment.apiUrl}/buy`, data)
  }
}