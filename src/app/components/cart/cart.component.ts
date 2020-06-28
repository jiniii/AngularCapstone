import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Products } from '../../models/user.model';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cartItems: any;
  cartTotal: any;

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  /**
   * ngOnInit():To initialize all the declared variables
   */
  ngOnInit() {
    this.cartItems = [];
    this.cartTotal = 0;
    this.handleSubscription();
    this.loadCartItems();
  }

  /**
   * ngOnDestroy(): To Destroy all the declared variables
   */
  ngOnDestroy() {
    this.cartTotal = null;
    this.cartItems = null;
  }

  /**
   * to handel get the product
   */
  handleSubscription() {
    this.msg.getMsg().subscribe((product: Products) => {
      this.loadCartItems();
    })
  }

  /**
   * to load the cart items
   */
  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  /**
   * to calculate the cart total
   */
  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal = this.cartTotal + (item.qty * item.price);
    })
  }
}
