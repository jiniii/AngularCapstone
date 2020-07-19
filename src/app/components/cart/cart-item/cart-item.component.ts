import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any =[];

  constructor(private cartService: CartService, private msg: MessengerService) { }

  ngOnInit() {
  }

  /**
   * to remove the product from cart
   * @param removedProduct 
   */
  removeItem(removedProduct) {
    this.cartService.removeProduct(removedProduct).subscribe(() => {
      this.msg.sendMsg(removedProduct);
    })
  }

}
