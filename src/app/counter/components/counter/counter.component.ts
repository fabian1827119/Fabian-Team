import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetBy()" >Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
`
})

export class CounterComponent  {
  public counter:number=10;

  increaseBy(value:number):number{
    this.counter += value;
    return this.counter;
  }
  resetBy():void{
    this.counter=10;
  }


}
