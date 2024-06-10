import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeTransform'
})
export class TypeTransformPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'phone':
        return 'Telefone';
      case 'email':
        return 'E-mail';
      case 'whatsapp':
        return 'WhatsApp';
      default:
        return value;
    }
  }
}
