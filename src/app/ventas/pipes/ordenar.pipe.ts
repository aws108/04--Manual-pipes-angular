import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], ordenPor: string = 'sin valor'): Heroe[] {
    
    switch(ordenPor){ 

      case 'nombre':
        return value.sort( (a, b) => (a.nombre > b.nombre) ? 1:-1); // 1

      case 'vuela':
        return value.sort( (a, b) => (a.vuela > b.vuela) ? -1: 1); //bool: primero va false y luego true

      case 'color':
        return value.sort( (a, b) => (a.color > b.color) ? 1: -1);

      default: 
        return value;
    } 
  }

}

//@ts-ignore --> Se pone para evitar errores en el switch

//El valor es el array de Heroes[], devuelve el array de Heroe[] ya ordenado


/* 1
- Compara el primer con el segundo elemento, el segundo con el tercero, etc
- Devuelve un 1 si hay que cambiarlo de sitio, -1 para moverlo al revés
- Es lo mismo que:

items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;

*/