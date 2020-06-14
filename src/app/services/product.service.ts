import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOpt = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  name: string;
  quantity: number;
  url = "http://localhost:3000/Products";

  constructor(private http: HttpClient) {

  }
  getProduct() {
    return this.http.get(this.url);
  }

  deleteProduct(id){
    return this.http.delete(this.url+"/"+id);
  }

  addProduct(proName, proDes,myMan,myQua,myPri) {

    const body = JSON.stringify({
        productName: proName,
        productDes: proDes,
        manufacturer:myMan,
        quantity:myQua,
        price:myPri,
    })

    return this.http.post(this.url, body, httpOpt);
  }

  update(proName, proDes,myMan,myQua,myPri,num){

  }

}