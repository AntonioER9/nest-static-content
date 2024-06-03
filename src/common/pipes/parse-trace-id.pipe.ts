import { BadRequestException, Injectable, ParseUUIDPipe } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ParseTraceIDPipe extends ParseUUIDPipe {
  transform(value: string): Promise<string> {
    if (!value) {
      return Promise.resolve(uuidv4());
    } else if (!this.isUUID(value)) {
      throw new BadRequestException('Parametro traceId invalido');
    } else {
      return Promise.resolve(value);
    }
  }
}
