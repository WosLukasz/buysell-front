import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Amount } from 'app/model/common.model';

@Pipe({
  name: 'appCurrency'
})
export class CurrencyPipe implements PipeTransform {

  private decimalPipe = new DecimalPipe('en-US');

  transform(value: unknown, ...args: unknown[]): unknown {
    if(!value) {
      return '';
    }

    const amount = value as Amount;

    return this.formatValue(amount.value, amount.currency);
  }

  private formatValue(numberValue: number, currency: string): string {
    if (isNaN(numberValue)) {
      return '';
    }

    return (this.decimalPipe.transform(numberValue, '1.0-2')?.replace(/,/g, ' ') || '') + ' ' + currency;
  }

}
