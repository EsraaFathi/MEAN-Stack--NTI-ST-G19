import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  //properties
  tiltle: string = 'DAY 1 ANGULAR';
  price: number = 70;

  url: string = 'https://miro.medium.com/1*FqNPqslt0wc985iUWowLVQ.png';
  url2: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlaTRdKrI_OW0JvTdc4cAiyo9FnuHbuxsm4Rdm3i40g&s=10';
  //DOM >>html
  //constructor

  //methods

  welcome(x: string): void {
    alert(x);
  }
  ///value of input
  search: string = '';
}
