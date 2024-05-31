import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola mundo';
  private description: string = 'Esto es una descripción';
  private description2: string = 'Esto es una descripción';
}
