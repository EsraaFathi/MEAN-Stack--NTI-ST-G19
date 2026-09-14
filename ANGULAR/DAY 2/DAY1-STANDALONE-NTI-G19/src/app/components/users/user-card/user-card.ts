import { Component, Input } from '@angular/core';
import { Iuser } from '../../../models/iuser';

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {
  @Input()
  user!: Iuser;
}
