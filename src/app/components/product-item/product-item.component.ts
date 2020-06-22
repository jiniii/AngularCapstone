import { Component, OnInit, Input, Output } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { Products } from 'src/app/models/user.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Products;

  //@Output() searchText: string;

  products: Products[] = [];

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
  ) { }

  ngOnInit() {

  }

  handleAddToCart(addedProduct) {
    this.cartService.addProductToCart(addedProduct).subscribe(() => {
      this.msg.sendMsg(addedProduct);
      alert("Product added into cart Successfully!")
    })
  }
}
