import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAll(): any {
    return [
      {
        Hello: 'sadasdasd',
      },
    ];
  }

  getOneByAppName(appName: string): object {
    console.log(appName);
    return {
      Hello: 'sadasdasd',
    };
  }
}
