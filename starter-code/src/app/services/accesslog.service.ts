import { Injectable } from '@angular/core';

@Injectable()
export class AccesslogService {

  logMessages: any[] = [];



  constructor() { }



  getAccessLog() {
    return this.logMessages;
  }

  addAccessItem(theLog: any) {
      this.logMessages.push(theLog)
      theLog["createdAt"] = new Date();
    }
  }
