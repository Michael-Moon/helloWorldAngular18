
import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { MotoService } from './moto.service';


@Component({
  selector: 'app-moto',
  standalone: true,
  template: `
    <div style="padding: 10em 10em; ">
       <button  style="width: 18em; height: 5em; border-radius: 5px; background-color: white; color: black; cursor: pointer;" type="button" (click)="findAllMoto()" >Buscar Motos</button>
    </div>
  `,
  imports: [CommonModule],
  styleUrl: './moto.component.scss',

})
export class MotoComponent {

  private motoService  = inject(MotoService);

  async findAllMoto(){

   await this.motoService.all().subscribe(response =>{
    console.log(response)
   })
  }

}
