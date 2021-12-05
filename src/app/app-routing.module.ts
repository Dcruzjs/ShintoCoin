import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { SellComponent } from './sell/sell.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "mine",
    component: MineComponent
  },
  {
    path: "buy",
    component: BuyComponent
  },
  {
    path: "sell",
    component: SellComponent
  },
  {
    path: "browse",
    component: BrowseComponent
  },
  {
    path: "transaction/:id",
    component: TransactionComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
