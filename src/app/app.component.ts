import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  canvas = 'myChart2';
  chartData: any;
  chartOptions: any;

  constructor() { }

  ngOnInit() {

    // Global config in class static method:
    Chart.defaults.global.defaultFontFamily = 'verdana';


    this.chartData = {
      datasets: [
        {
          data: [52.5, 85.5, 61, 136.5, 65, 56],
          label: 'Total',
          backgroundColor: '#000000',
          hoverBackgroundColor: '#000000',
          type: 'bubble',
          yAxisID: 'left-y-axis',
          order: 2
        },
        {
          data: [20, 50, 10.50, 75, 25, 20, 0],
          label: 'SE',
          backgroundColor: '#003475',
          hoverBackgroundColor: '#003475',
          yAxisID: 'left-y-axis',
          order: 2
        }, {
          data: [10.5, 10.5, 10.5, 11.5, 20, 15],
          label: 'S',
          backgroundColor: '#00B0E6',
          hoverBackgroundColor: '#00B0E6',
          yAxisID: 'left-y-axis',
          order: 2
        },
        {
          data: [10, 10, 15, 25, 15, 10],
          label: 'NE',
          backgroundColor: '#0063DE',
          hoverBackgroundColor: '#0063DE',
          yAxisID: 'left-y-axis',
          order: 2
        },
        {
          data: [12, 15, 25, 25, 5, 11],
          label: 'N',
          backgroundColor: '#FFD862',
          borderColor: '#000',
          borderWidth: 2,
          hoverBackgroundColor: '#FFD862',
          yAxisID: 'left-y-axis',
          order: 2
        },
        {
          data: [111, 95, 120, 125.0, 131.5, 111],
          label: 'Gastos S',
          backgroundColor: '#0000FF',
          hoverBackgroundColor: '#0000FF',
          type: 'bubble',
          yAxisID: 'right-y-axis',
          order: 1
        },
        {
          data: [91, 115, 90, 93.0, 101.5, 100],
          label: 'Gastos NE',
          backgroundColor: '#F50',
          hoverBackgroundColor: '#F50',
          type: 'bubble',
          yAxisID: 'right-y-axis',
          order: 1
        },
        {
          data: [111, 86, 100, 105.0, 121.5, 110],
          label: 'Gastos N',
          backgroundColor: '#F50',
          hoverBackgroundColor: '#F50',
          type: 'bubble',
          yAxisID: 'right-y-axis',
          order: 1
        },
        {
          data: [131, 126, 100, 105.0, 131.5, 100],
          label: 'Gastos S',
          backgroundColor: '#F50',
          hoverBackgroundColor: '#F50',
          type: 'bubble',
          yAxisID: 'right-y-axis',
          order: 1
        }

      ],
      labels: ['Jan/2020', 'Fev/2020', 'Mar/2020', 'Abr/2020', 'Mai/2020', 'Jun/2020']
    };

    this.chartOptions = {

      // animation: {
      //   duration: 1,
      //   onComplete: () => {
      //     const ctx = chart.ctx;
      //     ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
      //     ctx.textAlign = 'left';
      //     ctx.textBaseline = 'bottom';
      //     this.chartData.datasets.forEach((dataset) => {
      //       for (let i = 0; i < dataset.data.length; i++) {
      //         const model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
      //         const left = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._xScale.left;
      //         ctx.fillStyle = '#444'; // label color
      //         const label = model.label;
      //         ctx.fillText(label, left + 15, model.y + 8);
      //       }
      //     });
      //   }
        // onComplete: () => {
        //   const chartInstance = chart;
        //   const ctx = chartInstance.ctx;
        //   // tslint:disable-next-line:max-line-length
        //   ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
        //   ctx.textAlign = 'center';
        //   ctx.textBaseline = 'top';
        //   this.chartData.datasets.forEach((dataset, i) => {
        //     const meta = chartInstance['controller'].getDatasetMeta(i);
        //     meta.data.forEach((bar, index) => {
        //       const data = dataset.data[index];
        //       ctx.fillText(data, bar._model.x, bar._model.y - 5);
        //     });
        //   });
        // }
      // },
      legend: {
        position: 'bottom',
        labels: {
          filter: (legendItem, chartData) => {
            if (legendItem.datasetIndex === 0) {
              return false;
            }
            return true;
          }
        }
      },
      title: {
        display: true,
        text: 'TRIAGEM DOENÇA '
      },
      scales: {

        xAxes: [{
          stacked: true,
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          }
        }],
        yAxes: [{
          id: 'left-y-axis',
          type: 'linear',
          position: 'left',
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: 'Casos doença XFT',
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          }
        },
        {
          id: 'right-y-axis',
          type: 'linear',
          position: 'right',
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
          scaleLabel: {
            display: true,
            labelString: 'REAIS GASTOS'
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 150
          }
        }
        ]
      }
    };

    const chart = new Chart(this.canvas, {
      type: 'bar',
      data: this.chartData,
      options: this.chartOptions
    });
  }

  // updateChartOptions(chart) {
  //   chart.data = this.chartData;
  //   chart.options.animation = false;
  //   chart.update();
  // }

}
