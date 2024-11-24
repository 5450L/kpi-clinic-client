import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormatter',
  standalone: true,
})
export class PhoneFormatterPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const digits = value.replace(/\D/g, '');

    if (digits.startsWith('380') && digits.length === 12) {
      const countryCode = digits.slice(0, 2);
      const operatorCode = digits.slice(2, 5);
      const part1 = digits.slice(5, 8);
      const part2 = digits.slice(8, 10);
      const part3 = digits.slice(10);
      return `+${countryCode} (${operatorCode}) ${part1}-${part2}-${part3}`;
    }

    if (digits.length === 7) {
      const part1 = digits.slice(0, 3);
      const part2 = digits.slice(3, 5);
      const part3 = digits.slice(5);
      return `${part1}-${part2}-${part3}`;
    }

    return value;
  }
}
