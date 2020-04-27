import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: {
    display: true,
    text: 'Posição Cnsolidada - Energia'
  };
  chart = [];
  canvas = 'myChart';
  canvas2 = 'myChart2';

  chartData: any;
  chartData2: any;

  constructor() { }

  ngOnInit() {

    this.chartData = {
      labels: ['jan/20', 'fev/20', 'mar/20', 'abr/20'],
      datasets: [
        {
          label: 'Total',
          yAxisID: 'y-axis-1',
          data: [40.8, 49.5, 74.0, 80.7],
          backgroundColor: '#000000', // red
          // Changes this dataset to become a line
          type: 'bubble',
          radius: 5,
          order: 2

        },

        {
          label: 'CO/N',
          yAxisID: 'y-axis-1',
          data: [10.0, 20.5, 34.0, 40.0],
          backgroundColor: '#AAAAFF', // 
          order: 3

        },
        {
          label: 'S/SE',
          yAxisID: 'y-axis-1',
          data: [20.7, 24.5, 30.0, 33.0],
          backgroundColor: '#7777FF', // yellow
          order: 3
        },
        {
          label: 'NE',
          yAxisID: 'y-axis-1',
          data: [10.1, 4.5, 10.0, 6.7],
          backgroundColor: '#1111FF',
          order: 3
        },

        {
          label: 'OTHER',
          yAxisID: 'y-axis-2',
          data: [40.8, 49.5, 74.0, 80.7],
          backgroundColor: '#000000', // red
          // Changes this dataset to become a line
          type: 'bubble',
          radius: 5,
          order: 1

        }



      ]



    };

    this.chartData2 = {
      labels: ['jan/20', 'fev/20', 'mar/20', 'abr/20', 'mai/20', 'jun/20'],
      datasets: [
        {
          label: 'Total',
          data: [30.8, 60.5, 35, 39.7, 11, 15],
          backgroundColor: '#000000', // red
          // Changes this dataset to become a line
          type: 'bubble',
          radius: 5,
          order: 1

        },

        {
          label: 'CO/N',
          data: [5.0, 11.5, 14.0, 10.0, 1, 3],
          backgroundColor: '#AAAAFF', // 
          order: 2

        },
        {
          label: 'S/SE',
          data: [10.7, 14.5, 20.0, 23.0, 6, 7],
          backgroundColor: '#7777FF', // yellow
          order: 2
        },
        {
          label: 'NE',
          data: [15.1, 34.5, 1.0, 6.7, 4, 5],
          backgroundColor: '#1111FF',
          order: 2
        }


      ]



    };

    // const chart1 = new Chart(this.canvas, {
    //   type: 'bar',
    //   options: {
    //     // legend: {
    //     //   labels: {
    //     //     filter: (legendItem, chartData) => {
    //     //       if (legendItem.datasetIndex === 0) {
    //     //         return false;
    //     //       }
    //     //       return true;
    //     //     }
    //     //   }
    //     // },
    //     title: {
    //       display: true,
    //       text: 'Posição Consolidada - Energia'
    //     },
    //     tooltips: {
    //       titleAlign: 'center',
    //       bodyAlign: 'center'
    //     },

    //     responsive: true,
    //     scales: {
    //       xAxes: [{
    //         stacked: true,
    //         gridLines: {
    //           color: 'rgba(0, 0, 0, 0)',
    //         }

    //       }],
    //       yAxes: [{
    //         id: 'y-axis-1',
    //         stacked: true,
    //         ticks: { mirror: true },
    //         gridLines: {
    //           color: 'rgba(0, 0, 0, 0)',
    //         }
    //       },

    //       {
    //         id: 'y-axis-2',
    //         stacked: false,
    //         position: 'right',
    //         type: 'linear',
    //         /*ticks: {
    //           beginAtZero:true
    //         },*/
    //         // scaleLabel: {
    //         //   display: true,
    //         //   labelString: 'Attendance'
    //         // }
    //       }

    //       ]
    //     },
    //     hover: {
    //       animationDuration: 0
    //     },


    animation: {


      duration: 1,
        onComplete: () => {
          const ctx = this.chart.ctx;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
          ctx.textAlign = 'left';
          ctx.textBaseline = 'bottom';
          this.chartData.datasets.forEach((dataset) => {
            for (let i = 0; i < dataset.data.length; i++) {
              const model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
              const left = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._xScale.left;
              ctx.fillStyle = '#444'; // label color
              const label = model.label;
              ctx.fillText(label, left + 15, model.y + 8);
            }
          });
        }

      // onComplete: () => {
      //   const chartInstance = this.chart;
      //   const ctx = chartInstance.ctx;
      //   // tslint:disable-next-line:max-line-length
      //   ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
      //   ctx.textAlign = 'center';
      //   ctx.textBaseline = 'top';

      //   this.chartData.datasets.forEach((dataset, i) => {
      //     const meta = chartInstance.controller.getDatasetMeta(i);
      //     meta.data.forEach((bar, index) => {
      //       const data = dataset.data[index];
      //       ctx.fillText(data, bar._model.x, bar._model.y - 5);
      //     });
      //   });
      // }

    }
    //   },
    //   data: this.chartData

    // });


    // const chart2 = new Chart(this.canvas2, {
    //   type: 'bar',
    //   data: this.chartData,
    //   options: {



    //   }
    // });


    // this.chart.push(chart1);



    // setTimeout(() => {
    //   this.updateChartOptions(this.chart[0]);
    // }, 2000);




    Chart.defaults.global.defaultFontFamily = 'verdana';
    const chart3 = new Chart(this.canvas2, {
      type: 'bar',
      data: {
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
            label: 'SE/CO',

            backgroundColor: 'rgba(68,114,196,1)',
            hoverBackgroundColor: 'rgba(68,114,196,1)',
            yAxisID: 'left-y-axis',
            order: 2
          }, {
            data: [10.5, 10.5, 10.5, 11.5, 20, 15],
            label: 'S',
            backgroundColor: 'rgba(0,255,255,1)',
            borderColor: 'rgba(0,0,0,1)',
            // borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,255,255,1)',
            yAxisID: 'left-y-axis',
            order: 2
          },
          {
            data: [10, 10, 15, 25, 15, 10],
            label: 'NE',

            backgroundColor: '#0f0',
            hoverBackgroundColor: '#0f0',
            // This binds the dataset to the left y axis
            yAxisID: 'left-y-axis',
            order: 2
          },
          {
            data: [12, 15, 25, 25, 5, 11],
            label: 'N',

            backgroundColor: '#ff0',
            hoverBackgroundColor: '#ff0',
            // This binds the dataset to the left y axis
            yAxisID: 'left-y-axis',
            order: 2
          }, {
            data: [111, 95, 120, 125.0, 131.5, 111],
            label: 'Pmc S',
            backgroundColor: '#0000FF',
            hoverBackgroundColor: '#0000FF',
            type: 'bubble',
            // This binds the dataset to the right y axis
            yAxisID: 'right-y-axis',
            order: 1
          },
          {
            data: [91, 115, 90, 93.0, 101.5, 100],
            label: 'Pmc NE',
            backgroundColor: '#F50',
            hoverBackgroundColor: '#F50',
            type: 'bubble',
            // This binds the dataset to the right y axis
            yAxisID: 'right-y-axis',
            order: 1
          },
          {
            data: [111, 86, 100, 105.0, 121.5, 110],
            label: 'Pmc N',
            backgroundColor: '#F50',
            hoverBackgroundColor: '#F50',
            type: 'bubble',
            // This binds the dataset to the right y axis
            yAxisID: 'right-y-axis',
            order: 1
          }
        ],
        labels: ['Jan/2020', 'Fev/2020', 'Mar/2020', 'Abr/2020', 'Mai/2020', 'Jun/2020']
      },
      options: {
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
          text: 'Posição Consolidada Energia - Com Preços'
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
            gridLines: {
              color: 'rgba(0, 0, 0, 0)',
            }
          }, {
            id: 'right-y-axis',
            type: 'linear',
            position: 'right',
            gridLines: {
              color: 'rgba(0, 0, 0, 0)',
            },
            scaleLabel: {
              display: true,
              labelString: 'R$/MWh'
            },
            ticks: {
              suggestedMin: -100,
              suggestedMax: 150
            }

          }]
        },

        animation: {


          duration: 1,
          // onComplete: () => {
          //   const ctx = chart3.ctx;
          //   ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
          //   ctx.textAlign = 'left';
          //   ctx.textBaseline = 'bottom';
          //   this.chartData.datasets.forEach((dataset) => {
          //     for (let i = 0; i < dataset.data.length; i++) {
          //       const model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
          //       const left = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._xScale.left;
          //       ctx.fillStyle = '#444'; // label color
          //       const label = model.label;
          //       ctx.fillText(label, left + 15, model.y + 8);
          //     }
          //   });
          // }

          onComplete: () => {
            const chartInstance = chart3;
            const ctx = chartInstance.ctx;
            // tslint:disable-next-line:max-line-length
            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';

            this.chartData.datasets.forEach((dataset, i) => {
              const meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach((bar, index) => {
                const data = dataset.data[index];
                ctx.fillText(data, bar._model.x, bar._model.y - 5);
              });
            });
          }

        }




      }
    });



    this.chart.push(chart3);



  }


  updateChartOptions(chart) {
    // chart.options = {
    //   responsive: true,
    //   title: {
    //     display: true,
    //     text: 'Chart.js'
    //   },
    //   scales: {
    //     xAxes: [{
    //       display: true
    //     }],
    //     yAxes: [{
    //       display: true
    //     }]
    //   }
    // };
    chart.data = this.chartData2;
    chart.options.animation = false;

    chart.update();
  }


}
