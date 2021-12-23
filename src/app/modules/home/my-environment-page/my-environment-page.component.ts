import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-environment-page',
  templateUrl: './my-environment-page.component.html',
  styleUrls: ['./my-environment-page.component.css']
})
export class MyEnvironmentPageComponent implements OnInit {


  largeStablihsments = "assets/img/shopping-mall.png";
  shoppingMall = "assets/img/market.png";
  shoppingCart = "assets/img/mall-shopping-cart.png";
  comercialMarket = "assets/img/shop.png";
  fairMarkets = "assets/img/cans.png"

  constructor() { }

  ngOnInit(): void {
  }

}
