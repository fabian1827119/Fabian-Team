import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeletcharacter:EventEmitter<string>=new EventEmitter();

  @Input()
  public characterList:Character[]=[
    {
      name:'Trunks',
      power:10
    }
  ];

  onDeleteCharacterC(id?:string):void{
    if(!id){
      return;
    }
    this.onDeletcharacter.emit(id);

  }
}
