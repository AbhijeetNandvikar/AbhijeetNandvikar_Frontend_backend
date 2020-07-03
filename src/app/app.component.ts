import { Component } from '@angular/core';
import { GetapiService } from "./getapi.service";
import { Chart } from 'chart.js';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ball-bounce';
  constructor(private api: GetapiService) { }

  h = 0;
  e = 0;
  bounce = 0

  onKeyH(value: string) { // without type info
    this.h = parseInt(value, 10);
    console.log(this.h)
  }
  onKeyE(value: string) { // without type info
    this.e = parseInt(value, 10);
    console.log(this.e)
  }

  onClickButton(h, e) {
    this.api.getCordinates(h, e)
      .subscribe(data => {
        this.heightArray = data[0]
        this.timeArray = data[1]
        this.bounce = data[2]

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: this.timeArray,
            datasets: [
              {
                data: this.heightArray,
                borderColor: "#3cba9f",
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });

      })
  }
  heightArray = []
  timeArray = []
  chart: any = []
  ngOnInit() {


  }


}
