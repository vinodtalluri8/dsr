import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeReconciliationComponent } from "./trade-reconciliation/trade-reconciliation.component";
import { PositionReconciliationComponent } from "./position-reconciliation/position-reconciliation.component";
import { RollForwardReconciliationComponent } from "./roll-forward-reconciliation/roll-forward-reconciliation.component";
import { SharedModule } from "../shared/shared.module";
import { RadioButtonModule } from "primeng/radiobutton";
import { SearchSrsTradesComponent } from './research/search-srs-trades/search-srs-trades.component';
import { SearchTaTradesComponent } from './research/search-ta-trades/search-ta-trades.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RadioButtonModule
  ],
  declarations: [
    TradeReconciliationComponent,
    PositionReconciliationComponent,
    RollForwardReconciliationComponent,
    SearchSrsTradesComponent,
    SearchTaTradesComponent
  ]
})
export class SalesReconModule { }
