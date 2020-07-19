import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Products } from '../../models/user.model';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cartItems: any;
  cartTotal: any;
  purchasedProduct:any;

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private route: Router,
    private productSer: ProductService,
    private alertService: AlertService
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
  /**
   * to navigate back to products page
   */
  back() {
    this.route.navigate(['products']);
  }
  /**
   * Buy product
   * @param cartItem 
   */
  buy(cartItem:any){
    this.productSer.buyProduct(cartItem).subscribe(data =>{
      this.alertService.success('Your Product is Purchased Successfully! Thanks for the Purchase.', { keepAfterRouteChange: true });
      this.purchasedProduct = data;
      this.cartItems = [];
    })
  }
}
