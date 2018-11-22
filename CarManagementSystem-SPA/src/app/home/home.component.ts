import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  cars: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCars();
  }

  registerToggle() {
    this.registerMode = true;
  }

  getCars() {
    this.http.get('http://localhost:5000/api/cars').subscribe(response => {
      this.cars = response;
    }, error => {
      console.log(error);
    });
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
