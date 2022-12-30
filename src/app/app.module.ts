import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule, } from 'primeng/fieldset';
//import {ButtonModule} from 'primeng/button';
//import {CardModule} from 'primeng/card'; -> Para evitar multiples importaciones, estas van a aun módulo

// Cambiar local app en global
import localeEs from '@angular/common/locales/es';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    SharedModule, 
    VentasModule, 
    AppRouterModule, 
    BrowserAnimationsModule,
    FieldsetModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
