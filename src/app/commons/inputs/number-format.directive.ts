import { DecimalPipe } from '@angular/common';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNumberFormat]'
})
export class NumberFormatDirective {

  private decimalPipe = new DecimalPipe('en-US');

  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('focus')
  onFocus() {
    const currentValue = this.el.nativeElement.value;
    this.el.nativeElement.value = this.cleanValue(currentValue);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === ',' || event.key === '.') {
      event.preventDefault();
      const currentValue = this.el.nativeElement.value;
      if (!currentValue.includes('.')) {
        this.el.nativeElement.value += '.';
      }

      return;
    }
  }

  @HostListener('input', ['$event'])
  onInput() {
    const currentValue = this.cleanValue(this.el.nativeElement.value);
    const formattedValue = this.formatValue(currentValue, '1.0-2');
    this.control.control?.setValue(currentValue);

    setTimeout(() => {
      this.el.nativeElement.value = formattedValue;
    }, 0);
  }

  @HostListener('blur')
  onBlur() {
    const currentValue = this.el.nativeElement.value;
    const formattedValue = this.formatValue(this.cleanValue(currentValue), '1.0-2');
    this.el.nativeElement.value = formattedValue;
    this.control.control?.setValue(this.cleanValue(formattedValue));

    setTimeout(() => {
      this.el.nativeElement.value = formattedValue;
    }, 0);
  }

  private formatValue(value: string, format: string): string {
    const numberValue = parseFloat(value);
    if (isNaN(numberValue)) {
      return '';
    }

    return this.decimalPipe.transform(numberValue, format)?.replace(/,/g, ' ') || '';
  }

  private cleanValue(value: string): string {
    return value.replace(/\s+/g, '');
  }
}
