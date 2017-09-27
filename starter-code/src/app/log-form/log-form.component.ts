import { Component, OnInit } from '@angular/core';
import { AccesslogService } from '../services/accesslog.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  constructor(
    private logThang: AccesslogService
  ) { }

  ngOnInit() {
  }

  addAccessItem(person, message) {
    this.logThang.logMessages.push({
      person: person,
      message: message,
      createdAt: new Date()
    })
  }

}
