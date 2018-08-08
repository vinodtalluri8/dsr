import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeReconciliationComponent } from "./trade-reconciliation/trade-reconciliation.component";
import { PositionReconciliationComponent } from "./position-reconciliation/position-reconciliation.component";
import { RollForwardReconciliationComponent } from "./roll-forward-reconciliation/roll-forward-reconciliation.component";
import { SharedModule } from "../shared/shared.module";
import { RadioButtonModule } from "primeng/radiobutton";
import { SearchSrsTradesComponent } from './research/search-srs-trades/search-srs-trades.component';
import { SearchTaTradesComponent } from './research/search-ta-trades/search-ta-trades.component';
import { DataProviderComponent } from './maintenance/data-provider/data-provider.component';
import { DataProviderAssignComponent } from './maintenance/data-provider-assign/data-provider-assign.component';
import { SrsTimingFactorComponent } from './maintenance/srs-timing-factor/srs-timing-factor.component';
import { TradeCategoryComponent } from './maintenance/trade-category/trade-category.component';
import { SystemValueComponent } from './maintenance/system-value/system-value.component';
import { TableModule } from 'primeng/table';
import { AddDataProviderComponent } from './maintenance/data-provider/add-data-provider/add-data-provider.component';
import { AddDataProviderAssignComponent } from './maintenance/data-provider-assign/add-data-provider-assign/add-data-provider-assign.component';
import {CheckboxModule} from 'primeng/checkbox';
import { AddSrsTimingFactorComponent } from './maintenance/srs-timing-factor/add-srs-timing-factor/add-srs-timing-factor.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RadioButtonModule,
    TableModule,
    CheckboxModule
  ],
  declarations: [
    TradeReconciliationComponent,
    PositionReconciliationComponent,
    RollForwardReconciliationComponent,
    SearchSrsTradesComponent,
    SearchTaTradesComponent,
    DataProviderComponent,
    DataProviderAssignComponent,
    SrsTimingFactorComponent,
    TradeCategoryComponent,
    SystemValueComponent,
    AddDataProviderComponent,
    AddDataProviderAssignComponent,
    AddSrsTimingFactorComponent
  ]
})
export class SalesReconModule { }
