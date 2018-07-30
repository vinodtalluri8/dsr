import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import { SalesReconComponent } from './sales-recon/sales-recon.component';
import { MockDataService } from "./services/mock-data.service";
import { TradeReconciliationComponent } from './sales-recon/trade-reconciliation/trade-reconciliation.component';
import { PositionReconciliationComponent } from './sales-recon/position-reconciliation/position-reconciliation.component';
import { RollForwardReconciliationComponent } from './sales-recon/roll-forward-reconciliation/roll-forward-reconciliation.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesReconComponent,
    TradeReconciliationComponent,
    PositionReconciliationComponent,
    RollForwardReconciliationComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AngularFontAwesomeModule,
    SharedModule,
    HttpClientModule,
    MultiSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    RadioButtonModule
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
