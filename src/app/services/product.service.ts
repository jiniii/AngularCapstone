import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Products } from '../models/user.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

const httpOpt = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  name: string;
  quantity: number;

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(`${environment.apiUrl}/Products` );
  }
  getHomeProduct() {
    return this.http.get(`${environment.apiUrl}/homeProducts`);
  }

  deleteProduct(id) {
    return this.http.delete(`${environment.apiUrl}/Products/${id}`);
  }

  addProduct(proName, proDes, myMan, myQua, myPri) {

    const body = JSON.stringify({
      productName: proName,
      productDes: proDes,
      manufacturer: myMan,
      quantity: myQua,
      price: myPri,
    })

    return this.http.post(`${environment.apiUrl}/Products/`,body,httpOpt);
  }

  update(proName, proDes, myMan, myQua, myPri, num) {

  }

}