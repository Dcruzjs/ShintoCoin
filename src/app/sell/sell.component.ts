import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
})
export class SellComponent implements OnInit {

  sell:number = 150;
  errorMsg:string = ""

  get currentValue():number{
    return this.coinService.currentValue
  }

  get ownedCoins(){
    return this.coinService.ownedCoins
  }

  constructor(
    private coinService: CoinService
  ) { }

  ngOnInit(): void {
  }

  sellCoins():void{
    console.log("sell", this.sell)
    console.log("ownedCoins",this.ownedCoins)

    if(this.ownedCoins >= this.sell ){
      console.log("selling coins")
      this.coinService.sellCoins(this.sell)
      this.errorMsg= ""
    }else{
      this.errorMsg = "You do not have enough coins to perform this transaction"
      console.log(this.errorMsg)
    } 

  }
  
}
