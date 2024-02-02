import { Component } from '@angular/core';
import { TableFilteringAndSortingService } from '../../Services/table-filtering-and-sorting.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  // data for testing views
  clients: any = [
    {
      name: "أحمد محمود ",
      number: 1,
      phone: "0123456789",
      tecketNO: "C-101",
      ticketPrice: "40",
      cinemaPlace: ["سينما مصر", "مول العرب", " برج الأطنان", " سرايا القبة", "صيدناوى مول", "برج العرب"],
      visitorsGroupNO: 1,
      ticketSubscribtionNo: "مرة واحدة",
      ticket: 'تذكرة رقم 45.pdf',
      image: '/assets/images/client-1.svg',
      fileSize: "9mb",
      fileType: ".PDF"
    },
    {
      name: "محمد الغريب",
      number: 1,
      phone: "0123456789",
      tecketNO: "C-102",
      ticketPrice: "30",
      cinemaPlace: ["سينما مصر", "مول العرب", " برج الأطنان", " سرايا القبة"],
      visitorsGroupNO: 1,
      ticketSubscribtionNo: "مرة واحدة",
      ticket: 'تذكرة رقم 45.pdf',
      image: '/assets/images/client-2.png',
      fileSize: "9mb",
      fileType: ".PDF"
    },
    {
      name: "محمد الغريب",
      number: 3,
      phone: "0123456789",
      tecketNO: "C-102",
      ticketPrice: "45",
      cinemaPlace: ["سينما مصر", "مول العرب", " برج الأطنان", " سرايا القبة"],
      visitorsGroupNO: 1,
      ticketSubscribtionNo: "مرة واحدة",
      ticket: 'تذكرة رقم 45.pdf',
      image: '/assets/images/client-3.png',
      fileSize: "9mb",
      fileType: ".PDF"
    },
    {
      name: "محمد الغريب",
      number: 4,
      phone: "0123456789",
      tecketNO: "C-103",
      ticketPrice: "54",
      cinemaPlace: ["سينما مصر", "مول العرب", " برج الأطنان", " سرايا القبة"],
      visitorsGroupNO: 1,
      ticketSubscribtionNo: "مرة واحدة",
      ticket: 'تذكرة رقم 45.pdf',
      image: '/assets/images/client-4.png',
      fileSize: "9mb",
      fileType: ".PDF"
    },
  ];

  reversed: boolean = false;
  key: string = 'name'
  filteredData: any = [...this.clients];

  first: number = 1;
  rows: number = 10;
  checked: boolean = true;

  constructor(private filter: TableFilteringAndSortingService) {
    this.feltringCinemaPlaces()
  }
  // Sorting Data insid the Table
  filterData(key: string, reversed: boolean) {
    this.filteredData = this.filter.filteredData(key, this.clients, reversed);
  }
  // feltring cinema laces from clients to getting all places and split them into showen and hovered with tooltip
  feltringCinemaPlaces(): void {
    this.filter.filterCinemaPlaces(this.clients)
  }
}
