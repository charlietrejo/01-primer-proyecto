import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 9000
    },
    {
      nombre: 'Vegueta',
      poder: 1000
    },
    {
      nombre: 'Piccolo',
    poder: 800
    }
  ]

 nuevo: Personaje = {
  nombre: 'Krillin',
  poder: 100
 }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    }
    
    
  
  cambiarNombre(event: any) {
    console.log(event);
    
  }
}
