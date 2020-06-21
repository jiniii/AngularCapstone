import { Component, OnInit, Input, Output } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
//import { WishlistService } from 'src/app/services/wishlist.service';
import { ProductService } from 'src/app/services/product.service';
import { Products } from 'src/app/models/user.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Products;

  //@Input() addedToWishlist: boolean;

  @Output() searchText: string;

  products: Products[] = [];

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
   //private wishlistService: WishlistService,
    private proService: ProductService,
  ) { }

  ngOnInit() {

  }

  handleAddToCart(addedProduct) {
    this.cartService.addProductToCart(addedProduct).subscribe(() => {
      this.msg.sendMsg(addedProduct);
      confirm("Product added into cart Successfully!")
    })
  }

  // handleAddToWishlist() {
  //   this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
  //     this.addedToWishlist = true;
  //   })
  // }

  // handleRemoveFromWishlist() {
  //   this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
  //     this.addedToWishlist = false;
  //   })
  // }
}
