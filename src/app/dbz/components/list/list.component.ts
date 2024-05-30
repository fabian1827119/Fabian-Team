import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeletcharacter:EventEmitter<number>=new EventEmitter();

  @Input()
  public characterList:Character[]=[
    {
      name:'Trunks',
      power:10
    }
  ];

  onDeleteCharacter(index:number):void{
    //Todo: Emitir el ID del pesonaje
    console.log("Hola Fabian listComponent");
    console.log(index);
    this.onDeletcharacter.emit(index);

  }
}
