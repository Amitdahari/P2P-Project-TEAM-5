import { Component ,ViewChild } from '@angular/core';
import {ChartComponent,ApexAxisChartSeries,ApexChart,ApexPlotOptions,ApexXAxis,ApexFill,ApexLegend} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  
})


export class AppComponent {
  title = 'P2Ppro';
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Avocado 'Hass'",
          data: [
            {
              x: "דושן א",
              y: [
                new Date("2015").getTime(),
                new Date("2018").getTime()
              ]
            },
            {
              x: "ג'ונגל מזרח",
              y: [
                new Date("2018").getTime(),
                new Date("2020").getTime()
              ]
            },
            {
              x: "אנדרטה מערב",
              y: [
                new Date("2015").getTime(),
                new Date("2025").getTime()
              ]
            },
            {
              x: "המעיין",
              y: [
                new Date("2020").getTime(),
                new Date("2025").getTime()
              ]
            },
          ]
        },
        {
          name: "Banana",
          data: [
            {
              x: "דושן א",
              y: [
                new Date("2018").getTime(),
                new Date("2022").getTime()
              ]
            },
            {
              x: "ג'ונגל מזרח",
              y: [
                new Date("2015").getTime(),
                new Date("2018").getTime()
              ]
            },
            {
              x: "המעיין",
              y: [
                new Date("2015").getTime(),
                new Date("2016").getTime()
              ]
            },
          ]
        },
        {
          name: "Corn",
          data: [
            {
              x: "דושן א",
              y: [
                new Date("2022").getTime(),
                new Date("2025").getTime()
              ]
            },
            {
              x: "ג'ונגל מזרח",
              y: [
                new Date("2020").getTime(),
                new Date("2025").getTime()
              ]
            },
            {
              x: "המעיין",
              y: [
                new Date("2016").getTime(),
                new Date("2020").getTime()
              ]
            },
          ]
        }
      ],
      chart: {
        height: 450,
        type: "rangeBar"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "80%"
        }
      },
      xaxis: {
        type: "datetime"
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left"
      }
    };
  }
}


