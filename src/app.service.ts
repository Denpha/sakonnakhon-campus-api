import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Sakonnakhon Campus API !';
  }
  getSomething(): string{
    return 'Something Can be sent back !';
  }
}
