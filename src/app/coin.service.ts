import { Injectable } from '@angular/core';
import { Transaction } from './interfaces/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  private _currentValue: number = 1;
  private _ownedCoins: number = 0;
  private _transactions: Transaction[] = []
  private _transactionId: number = 1
  get currentValue():number{
   return this._currentValue
  }

  get ownedCoins():number{
    return this._ownedCoins
  }

  get transactions():Transaction[]{
    return [...this._transactions]
  }

  constructor(
    
  ) { }
  
  getTransaction(id:number):Transaction[]{
    console.log(id)
    return this._transactions.filter( (transaction:Transaction) => transaction.id === +id)
  }

  mineCoins():void{
    this._ownedCoins++;
    this.registerTransaction("mine",1, this.currentValue)
  }
  
  buyCoins(number:number):void{
    this._ownedCoins += +number;
    console.log(this._ownedCoins)
    this.registerTransaction("buy",number, this.currentValue)
  }
  
  sellCoins(number:number):void{
    if(this._ownedCoins >= number){
      this._ownedCoins -= number
      this.registerTransaction("sell",number, this.currentValue)
    } 
  }

  registerTransaction(action:string, amount:number, value:number ):void{
    
    
    this._transactions.push({
      action,
      amount,
      value,
      id: this._transactionId++
    })
  }

}
