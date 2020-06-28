import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { Products } from 'src/app/models/user.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit, OnDestroy {

  @Input() productItem: Products;
  searchText: string;
  products: Products[];

  /**
   * constructor that loads MessengerService,CartService modules
   * @param msg 
   * @param cartService 
   */
  constructor(
    private msg: MessengerService,
    private cartService: CartService,
  ) { }

  /**
   * ngOnInit():To initialize all the declared variables
   */
  ngOnInit() {
    this.searchText = '';
    this.products = [];
  }

  /**
   * ngOnDestroy(): To Destroy all the declared variables
   */
  ngOnDestroy() {
    this.searchText = null;
    this.products = null;
  }

  /**
   * handleAddToCart(): to add the product to a cart
   * @param addedProduct 
   */
  handleAddToCart(addedProduct) {
    this.cartService.addProductToCart(addedProduct).subscribe(() => {
      this.msg.sendMsg(addedProduct);
      alert("Product added into cart Successfully!")
    })
  }
}
