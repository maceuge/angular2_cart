import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Product} from '../product';
import {ProductService} from '../product/product.services';
import {CartService} from '../cart/cart.services';
import {Router} from '@angular/router';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  providers: [ProductService, CartService]
})

export class DetailComponent implements OnInit{

  product : Product

  constructor (
    private route : ActivatedRoute,
    private locate : Location,
    private apiservice : ProductService,
    private cartService: CartService,
    private router: Router,
  ) {

  }

  addToCartInDetail () {
    return this.cartService.addToCart(this.product);
  }

  ngOnInit () {
    this.route.params.forEach( (params: Params) => {
        let id = +params["id"];
        this.apiservice.getProduct(id)
          .then(product => this.product = product);
    })
  }

  goToCart () {
    let link = ['/products'];
    this.router.navigate(link);
  }

}
