
export enum Color{
    rojo, negro, amarillo, blanco
//   0      1       2          3   color amarillo es el 2 
}

export interface Heroe {

    nombre: string;
    vuela: boolean;
    color: Color;

}