import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = "Aura";
  genero: string = "fem";
  dormirObj = {
    'masc': 'dormirlo',
    'fem': 'dormirla'
  }

  // i18nPlural
  bebes: string[] = ['Aura', 'Martina', 'Rigoberto', 'Apu', 'Keka'];
  bebesObj = { //si el length del array de bebes es 0, 1, 2 o 3
    '=0': 'no estamos esperando ningún bebé',
    '=1': 'estamos esperando un bebé',
    '=2': 'estamos esperando gemelos',
    '=3': 'estamos esperando trillizos',
    'other': 'estamos esperando # bebés'
  }

  cambiarGenero(){
    this.nombre = "Antonio";
    this.genero = "masc";
  }

  borrarBebes(){
    this.bebes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: "Antonio",
    edad: 34,
    direccion: "Albacete, España"
  }

  //Json pipe
  heroes = 
  [
    {
     nombre: "SuperMartina",
     vuela: true
    },
    {
      nombre: "SuperKeka",
      paciencia: true
     },
     {
      nombre: "SuperAura",
      lloro: true
     },
     {
      nombre: "SuperMarta",
      despierta: false
     } 
  ];
  
  //Async Pipe -> Observable o promesa
  miObservable = interval(1000); //1000 milésimas de segundo. Observable que va a estar emitiendo núms

  valorPromesa = new Promise((resolve, reject)=> { //callback, reject en caso de error
    setTimeout(()=>{
      resolve("Martina dormirá sin llorar");
    }, 3500);
  });


}
