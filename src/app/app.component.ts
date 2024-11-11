import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'Projet_1';
  name = 'NAJIHI';
  texte = 'Je veux apprendre à coder en Angular svp'
  img_lien = 'https://static.wikia.nocookie.net/yinyangyo/images/a/a1/Lina_Puzzled_PNG.png/revision/latest?cb=20171007222622'
  alter = 'Angular_img';
  age = '';

  change(){
    this.name = 'Ali';
    this.texte = 'Je suis au Bled';
  }
}
