import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  enMayus: boolean = false;
  ordenarPor: string ="";

  heroes: Heroe[] = [
    {
      nombre: "Kekawoman",
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: "Espideman",
      vuela: false,
      color: Color.negro
    },
    {
      nombre: "Bartman",
      vuela: true,
      color: Color.blanco
    },
    {
      nombre: "WonderAura",
      vuela: true,
      color: Color.negro
    },
    {
      nombre: "AquaFran",
      vuela: false,
      color: Color.amarillo
    }
  ];

  enMayusculas(){
    return this.enMayus = !this.enMayus; //this.enMayusculas es igual a lo contrario
  }

  cambiarOrden(valor: string){
    console.log(valor);
    this.ordenarPor = valor;
  }

}
