import { Component } from '@angular/core';

@Component({
  selector: 'input[app-input]',
  template: `
    <ng-content/>
  `,
  standalone: true,
  imports: [],
  styleUrl: './input.component.scss'
})
export class InputComponent {

}
