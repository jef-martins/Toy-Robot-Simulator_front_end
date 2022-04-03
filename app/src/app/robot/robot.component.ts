import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})
export class RobotComponent implements OnInit {

  grid = [];
  init = true;
  commands = '';
  commandInit = {
    "cord_x": '',
    "cord_y": '',
    "direction": ''
  };
  message = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async submit() {
    let response: any
    if (this.init) {

      const arrayValid = Object.values(this.commandInit).filter(el => el);

      if (arrayValid.length == 3) {
        response = await lastValueFrom(this.http.post('http://localhost:8081', this.commandInit));
        this.init = false;
      }

    } else {

      const command = {
        "command": this.commands
      };

      response = await lastValueFrom(this.http.post('http://localhost:8081/robot', command));

    }

    this.grid = response?.table;
    this.message = response?.message || '';

    setTimeout(() => {
      this.message = '';
    }, 5000);

    this.commands = '';

  }

}
