import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HeaderComponent } from './Components/header/header.component';
import { QuoteTableComponent } from './Components/quote-table/quote-table.component';
import { RelationsTableComponent } from './Components/relations-table/relations-table.component';
import { ShipmentTableComponent } from './Components/shipment-table/shipment-table.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './core/interceptors/auth-interceptor.interceptor';
import { DetailsTableComponent } from './Components/details-table/details-table.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterTablePipe } from './core/pipes/filter-table.pipe';
import { FooterTableComponent } from './Components/footer-table/footer-table.component';
import { FilterShipmentTablePipe } from './core/pipes/filter-shipment-table.pipe';
import { FilterRelationTablePipe } from './core/pipes/filter-relation-table.pipe';
import { GuidesComponent } from './Views/guides/guides.component';
import { FilesComponent } from './Views/files/files.component';
import { FileNavBarComponent } from './Components/Files/file-nav-bar/file-nav-bar.component';
import { FileTablesComponent } from './Components/Files/file-tables/file-tables.component';
import { FilterFilePipe } from './core/pipes/filter-file.pipe';
import { StrToJsonPipe } from './core/pipes/str-to-json.pipe';
import { FilterListFilesPipe } from './core/pipes/filter-list-files.pipe';
import { MimTableComponent } from './Components/mim-table/mim-table.component';
import { MimComponent } from './Views/mim/mim.component';
import { FilterErrorsPipe } from './core/pipes/filter-errors.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    QuoteTableComponent,
    RelationsTableComponent,
    MimTableComponent,
    MimComponent,
    ShipmentTableComponent,
    DetailsTableComponent,
    FilterTablePipe,
    FooterTableComponent,
    FilterShipmentTablePipe,
    FilterRelationTablePipe,
    GuidesComponent,
    FilesComponent,
    FileNavBarComponent,
    FileTablesComponent,
    FilterFilePipe,
    StrToJsonPipe,
    FilterListFilesPipe,
    FilterErrorsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
