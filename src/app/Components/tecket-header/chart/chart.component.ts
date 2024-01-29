import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @ViewChild('chart') chart!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const series = {
      monthDataSeries1: {
        prices: [30, 40, 35, 50, 49, 60, 70, 91],
        dates: [
          'يناير',
          'فبراير',
          'مارس',
          'إبريل',
          'مايو',
          'يونيو',
          'يوليو',
          'أغسطس',
        ],
      },
    };

    const options: ApexOptions = {
      series: [
        {
          name: 'STOCK ABC',
          data: series.monthDataSeries1.prices,
        },
      ],
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'تحليل أساسي للأسهم',
        align: 'right', // ضبط محاذاة النص
      },
      subtitle: {
        text: 'حركة الأسعار',
        align: 'right',
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'category',
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    };

    const chart = new ApexCharts(this.chart.nativeElement, options);
    chart.render();
  }
}
