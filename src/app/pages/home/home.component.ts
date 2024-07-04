import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { FilmeComponent } from '../../components/filme/filme.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputComponent, FilmeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  condition: boolean = false;

  changeCondigition(){
    this.condition = !this.condition;
  }
  filmes = [
    "Ação", "Terror", "Suspense"
  ]

  filmes$ = of(this.filmes);
}
