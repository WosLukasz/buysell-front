import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-header',
  templateUrl: './view-header.component.html',
  styleUrl: './view-header.component.scss'
})
export class ViewHeaderComponent {

  @Input() label: string;

  @Input() showBackButton: boolean;

  constructor(private location: Location){}

  back(): void {
    this.location.back();
  }

}
