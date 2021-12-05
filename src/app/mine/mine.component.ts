import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styles: [
  ]
})
export class MineComponent implements OnInit {

  constructor(
    private coinService: CoinService
  ) { }

  ngOnInit(): void {
  }
  mineCoins(){
    this.coinService.mineCoins()
  }
}
