import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Products } from '../models/user.model';
import { Observable } from 'rxjs';

const httpOpt = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  name: string;
  quantity: number;
  url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url + "/Products");
  }
  getHomeProduct() {
    return this.http.get(this.url + "/homeProducts");
  }

  deleteProduct(id) {
    return this.http.delete(this.url + "/Products/" + id);
  }

  addProduct(proName, proDes, myMan, myQua, myPri) {

    const body = JSON.stringify({
      productName: proName,
      productDes: proDes,
      manufacturer: myMan,
      quantity: myQua,
      price: myPri,
    })

    return this.http.post(this.url + "/Products", body, httpOpt);
  }

  update(proName, proDes, myMan, myQua, myPri, num) {

  }

}