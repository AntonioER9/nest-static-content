import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseNumberPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const parsedValue = Number.parseInt(value, 10);
    if (Number.isNaN(parsedValue)) {
      throw new BadRequestException('Parametro faltante o invalido');
    }
    return parsedValue;
  }
}
