import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Amount } from 'app/model/auctions.model';

@Pipe({
  name: 'appCurrency'
})
export class CurrencyPipe implements PipeTransform {

  private decimalPipe = new DecimalPipe('en-US');

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('CurrencyPipe', value);
    if(!value) {
      return '';
    }

    const amount = value as Amount;
    console.log('CurrencyPipe amount', amount);

    return this.formatValue(amount.value, amount.currency);
  }

  private formatValue(numberValue: number, currency: string): string {
    console.log('CurrencyPipe numberValue', numberValue); 
    if (isNaN(numberValue)) {
      return '';
    }

    return (this.decimalPipe.transform(numberValue, '1.0-2')?.replace(/,/g, ' ') || '') + ' ' + currency;
  }

}
