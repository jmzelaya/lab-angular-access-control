import { Component, OnInit } from '@angular/core';
import { AccesslogService } from '../services/accesslog.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  theLog: any = {};

  constructor(
    private logThang: AccesslogService
  ) { }

  ngOnInit() {
  }

  

}
