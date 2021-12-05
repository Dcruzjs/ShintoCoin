import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CoinService } from '../coin.service';
import { Transaction } from '../interfaces/transaction.interface';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
})
export class TransactionComponent implements OnInit {

  transaction: Transaction[] | undefined = [];

  get transactions():Transaction[]{
    return this.coinService.transactions
  }

  constructor(
    private coinService: CoinService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // this._route.params.pipe( switchMap( 
    //   ({id}) => this.transaction = this.coinService.getTransaction(id)
    // ))

    this._route.params.subscribe(
      ({id})=> this.transaction = this.coinService.getTransaction(id)
    )
  }

}
