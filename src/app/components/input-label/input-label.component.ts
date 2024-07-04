import { Component } from '@angular/core';

@Component({
  selector: 'app-input-label',
  template: `
      <div class="input-container">
        <label for="id" class="input-label">Label do Input</label>
        <input id="id" type="text" class="input-field">
      </div>
    `,
  standalone: true,
  imports: [],
  styleUrl: './input-label.component.scss'
})
export class InputLabelComponent {

}
