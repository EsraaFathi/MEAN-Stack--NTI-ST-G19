import { Routes } from '@angular/router';
import { Users } from './components/users/users';
import { Shop } from './components/shop/shop';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {
    path: 'users',
    children: [
      { path: '', redirectTo: 'allusers', pathMatch: 'full' },
      { path: 'allusers', component: Users },

      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ],
  },
  //NESTED ROUTES >> /users/login
  //shop/detials
  { path: 'shop', component: Shop },
  { path: '**', component: NotFound },
];
// /users // patients
