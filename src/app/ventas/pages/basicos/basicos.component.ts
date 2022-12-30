import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = "martina";
  nombreUpper: string = "MARTINA";
  nombreCani: string = "mArTiNa LiZaNa CiReRa";

  fecha: Date = new Date(); //Día de hoy
}


/* En app.module se ha hecho el cambio de idioma:

import localeEs from '@angular/common/locales/es-CR';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

providers: [{provide: LOCALE_ID, useValue: 'es-CR'}],

*/