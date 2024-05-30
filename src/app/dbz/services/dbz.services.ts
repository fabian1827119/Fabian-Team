import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());;

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  // Aquí puedes definir tus propiedades y métodos del servicio

  constructor() { }

  public characters:Character[]= [
    {
      id:uuid(),
      name:'Krilin',
      power:1000
    },
    {
      id:uuid(),
      name:'Goku',
      power:9500
    },
    {
      id:uuid(),
      name:'Vegeta',
      power:7500
    }
  ];

  addCharacter(character:Character):void{
    const newCharacter:Character={id:uuid(), ...character };
    this.characters.push(newCharacter);
  };

  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }

  // onDeleteCharacterF(index:number):void{
  //   console.log("onDeleteCharacter");
  //   console.log(index);
  //   this.characters.splice(index,1);
  // }

  // Ejemplo de un método en el servicio
  public getCharacters(): string[] {
    // Aquí puedes implementar la lógica para obtener los personajes de DBZ
    return ['Goku', 'Vegeta', 'Piccolo', 'Gohan'];
  }
}
