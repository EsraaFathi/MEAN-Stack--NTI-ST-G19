import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Shop } from './components/shop/shop';
import { About } from './components/about/about';
import { Users } from './components/users/users';

@Component({
  imports: [RouterOutlet, Header, Footer, Shop, About, Users], //childern components , // methodes >>builtin // modules
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
