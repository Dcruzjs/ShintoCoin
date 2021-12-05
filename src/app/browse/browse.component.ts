import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { Transaction } from '../interfaces/transaction.interface';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {

  get transactions():Transaction[]{
    return this.coinService.transactions
  }
  
  constructor(
    private coinService: CoinService
  ) { }

  ngOnInit(): void {
  }

}
