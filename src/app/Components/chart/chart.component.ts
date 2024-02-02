import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import ApexCharts from 'apexcharts';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chart') chart!: ElementRef;
  selectedInterval: string = 'سنويا';
  selectedCity: any;
  cities: any;

  chartInstance: ApexCharts | null = null; // Store the chart instance

  yearly = {
    prices: [120, 90, 50, 230, 75, 130, 40, 100, 250, 170, 230, 150],
    dates: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  }
  monthly = {
    prices: [75, 130, 40, 100, 250, 170, 230, 150, 120, 90, 50, 230],
    dates: [
      'يناير',
      'فبراير',
      'مارس',
      'إبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'اكتوبر',
      'نوفمبر',
      'ديسمبر',
    ],
  }
  periodData = this.monthly;

  ngAfterViewInit(): void {
    this.renderChart();
  }

  periodTime(event: any): any {
    if (event.target.value == 'yearly') {
      this.periodData = this.yearly;
    } else {
      this.periodData = this.monthly;
    }
    this.updateChart();
  }

  renderChart(): void {
    const series = {
      monthDataSeries1: this.periodData
    };

    const options: ApexOptions = {
      series: [
        {
          name: '',
          data: series.monthDataSeries1.prices,
        },
      ],
      chart: {
        type: 'area',
        height: 200,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        width: '100%',
      },
      xaxis: {
        categories: series.monthDataSeries1.dates.reverse(),
      },
      yaxis: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 1,
      },
      states: {
        hover: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
      },
      colors: ['#775DD0', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
      tooltip: {
        enabled: true,
        custom: ({ series, seriesIndex, dataPointIndex }) => {
          const currentValue = series[seriesIndex][dataPointIndex];
          const prevValue = dataPointIndex > 0 ? series[seriesIndex][dataPointIndex - 1] : null;

          let percentageChange = null;
          if (prevValue !== null) {
            percentageChange = ((currentValue - prevValue) / prevValue);
          }

          return `
          <div class="custom-tooltip">
            <span>${currentValue}</span> 
            <span> إستخدام</span>
            <p style="font-family: Inter; color:#8A74F9;">${percentageChange !== null ? percentageChange.toFixed(1) + '%' : 'N/A'}</p>
          </div>`;
        },
      },
      markers: {
        hover: {
          sizeOffset: 8,
        }
      }
    };

    this.chartInstance = new ApexCharts(this.chart.nativeElement, options);
    this.chartInstance.render();
  }

  updateChart(): void {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
    this.renderChart();
  }
}
