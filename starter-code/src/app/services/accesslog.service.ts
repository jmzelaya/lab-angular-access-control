import { Injectable } from '@angular/core';

@Injectable()
export class AccesslogService {

  logMessages: any[] = [];



  constructor() { }



  getAccessLog() {
    return this.logMessages;
  }

  addAccessItem(newPerson: string, newMessage: string) {
    this.logMessages.push({
      person: newPerson,
      message: newMessage,
      createdAt: new Date()
    })
  }

}
