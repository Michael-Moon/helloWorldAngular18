import { Component, Input } from '@angular/core';

@Component({
  selector: 'filme',
  standalone: true,
  imports: [],
  template: `
    <h5 style="margin: 15em 1em;"> {{ categoria }}</h5>
    @for (numero of [1,2,3,4]; track $index) {
      <p style="margin: 0.3em 0.3em;"> Filme {{ numero }} de {{ categoria }}</p>
    }
  `,

  styleUrl: './filme.component.scss'
})
export class FilmeComponent {

  @Input()
  categoria = ""

}
