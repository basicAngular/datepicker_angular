import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
const now = new Date();
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number, day: number};
  sendDate:any;minDate:any;maxDate:any;
  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  selectDate() {
    this.sendDate= this.model.day+"/"+this.model.month+"/"+this.model.year;
  }

  constructor() {
    this.minDate={year: now.getFullYear(), month: now.getMonth()+1, day: now.getDate()};
    this.maxDate={year: now.getFullYear(), month: now.getMonth() + 2, day: now.getDate()};
  }

  ngOnInit() {

  }

}
