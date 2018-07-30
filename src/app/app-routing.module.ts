import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SalesReconComponent } from "./sales-recon/sales-recon.component";
import { TradeReconciliationComponent } from "./sales-recon/trade-reconciliation/trade-reconciliation.component";
import { RollForwardReconciliationComponent } from "./sales-recon/roll-forward-reconciliation/roll-forward-reconciliation.component";
import { PositionReconciliationComponent } from "./sales-recon/position-reconciliation/position-reconciliation.component";

const routes: Routes = [
  // { path:'salesRecon', component: SalesReconComponent, children:[
  //   { path:'tradeReconciliation', component: TradeReconciliationComponent},
  //   { path:'positionReconciliation', component: PositionReconciliationComponent},
  //   { path:'rollForwardReconciliation', component: RollForwardReconciliationComponent}
  // ]}
    { path:'salesRecon/tradeReconciliation', component: TradeReconciliationComponent},
    { path:'salesRecon/positionReconciliation', component: PositionReconciliationComponent},
    { path:'salesRecon/rollForwardReconciliation', component: RollForwardReconciliationComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
