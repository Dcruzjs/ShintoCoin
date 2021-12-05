import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styles: [
  ]
})
export class BuyComponent implements OnInit {

  buy:number = 100;

  constructor(
    private coinService: CoinService
  ) { }

  ngOnInit(): void {
  }
  buyCoins():void{
    this.coinService.buyCoins(this.buy)

  }
  get currentValue():number{
    return this.coinService.currentValue
  }

  get ownedCoins(){
    return this.coinService.ownedCoins
  }

}
