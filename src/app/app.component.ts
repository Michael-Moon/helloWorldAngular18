import { InputComponent } from './components/input/input.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputLabelComponent } from './components/input-label/input-label.component';
import { FilmeComponent } from './components/filme/filme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, InputLabelComponent, FilmeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'helloWorldAngular';
}
