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
import { MockDataService } from "./services/mock-data.service";
import { SalesReconModule } from "./sales-recon/sales-recon.module";

@NgModule({
  declarations: [
    AppComponent
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
    RadioButtonModule,
    SalesReconModule
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
