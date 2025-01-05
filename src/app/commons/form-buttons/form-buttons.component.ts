import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrl: './form-buttons.component.scss'
})
export class FormButtonsComponent {

  @Input() primaryLabel: string;

  @Input() secondaryLabel: string;

  @Input() linkLabel: string;

  @Output() primaryCallback = new EventEmitter<undefined>();

  @Output() secondaryCallback = new EventEmitter<undefined>();

  @Output() linkCallback = new EventEmitter<undefined>();

}
