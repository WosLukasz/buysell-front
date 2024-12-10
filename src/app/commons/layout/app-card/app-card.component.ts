import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card', 
  templateUrl: './app-card.component.html', 
  styleUrls: ['./app-card.scss']  
})
export class AppCardComponent {

  @Input() title: string;

  constructor(){}

}
