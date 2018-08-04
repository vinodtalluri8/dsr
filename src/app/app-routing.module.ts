import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TradeReconciliationComponent } from "./sales-recon/trade-reconciliation/trade-reconciliation.component";
import { RollForwardReconciliationComponent } from "./sales-recon/roll-forward-reconciliation/roll-forward-reconciliation.component";
import { PositionReconciliationComponent } from "./sales-recon/position-reconciliation/position-reconciliation.component";
import { SearchSrsTradesComponent } from "./sales-recon/research/search-srs-trades/search-srs-trades.component";
import { SearchTaTradesComponent } from "./sales-recon/research/search-ta-trades/search-ta-trades.component";
import { DataProviderComponent } from "./sales-recon/maintenance/data-provider/data-provider.component";
import { AddDataProviderComponent } from "./sales-recon/maintenance/data-provider/add-data-provider/add-data-provider.component";
import { DataProviderAssignComponent } from "./sales-recon/maintenance/data-provider-assign/data-provider-assign.component";
import { AddDataProviderAssignComponent } from "./sales-recon/maintenance/data-provider-assign/add-data-provider-assign/add-data-provider-assign.component";

const routes: Routes = [
  // { path:'salesRecon', component: SalesReconComponent, children:[
  //   { path:'tradeReconciliation', component: TradeReconciliationComponent},
  //   { path:'positionReconciliation', component: PositionReconciliationComponent},
  //   { path:'rollForwardReconciliation', component: RollForwardReconciliationComponent}
  // ]}
    { path:'salesRecon/tradeReconciliation', component: TradeReconciliationComponent},
    { path:'salesRecon/positionReconciliation', component: PositionReconciliationComponent},
    { path:'salesRecon/rollForwardReconciliation', component: RollForwardReconciliationComponent},
    { path: 'research/srstrades', component: SearchSrsTradesComponent},
    { path: 'research/tatrades', component: SearchTaTradesComponent},
    { path: 'maintenance/dataprovider', component: DataProviderComponent},
    { path: 'maintenance/dataprovider/:type', component: AddDataProviderComponent},
    { path: 'maintenance/dataproviderassign', component: DataProviderAssignComponent},
    { path: 'maintenance/dataproviderassign/:type', component: AddDataProviderAssignComponent}
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
