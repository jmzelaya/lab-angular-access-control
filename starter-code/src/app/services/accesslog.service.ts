import { Injectable } from '@angular/core';

@Injectable()
export class AccesslogService {

  logMessages: any[] = []

  constructor() { }



  getAccessLog() {
    return this.logMessages;
  }

}
