import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { Products } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit, OnDestroy {

  searchText: string;
  products: Products[];
  config: any;

  /**
   * constructor that loads MessengerService,CartService modules
   * @param msg 
   * @param cartService 
   */
  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private proService: ProductService
  ) { }

  /**
   * ngOnInit():To initialize all the declared variables
   */
  ngOnInit() {
    this.searchText = '';
    this.products = [];
    this.getDetails();
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.products.length
    };
  }

  /**
   * ngOnDestroy(): To Destroy all the declared variables
   */
  ngOnDestroy() {
    this.searchText = null;
    this.products = null;
    this.config = null;
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
  /**
   * To change the page from current page
   * @param event 
   */
  pageChanged(event){
    this.config.currentPage = event;
  }
  /**
   * To get the product details
   */
  getDetails() {
    this.proService.getProduct().subscribe((product) => {
      this.products = product;
    })
  }
}
