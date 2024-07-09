import { Component, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  @ViewChild('chart') chart: any
  lines: any
  labels: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  data: any[] = [{
    x: 0,
  y: 4
  }, 
{
  x: 1,
  y: 5
},
{
  x: 2,
y: 1
},
{
  x: 3, 
  y: 2.5
},
{
  x: 4, 
  y: 1
}
]
  constructor() { }
  ngAfterViewInit () {this.createChart()}
  createChart() {
    this.lines = new Chart(this.chart.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'exampleGraph',
          data: this.data,
          backgroundColor: 'rgb(0, 0, 0)',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            grace: "10%"
          }
        }
      }
    })
  }
}
