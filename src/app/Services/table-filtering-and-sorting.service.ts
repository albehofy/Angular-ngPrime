import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableFilteringAndSortingService {

  constructor() { }
  sort_by = <T>(field: keyof T, reverse: any) => {
    const keyExtractor = (x: T) => x[field];

    reverse = !reverse ? 1 : -1;

    return (a: T, b: T) => {
      const aValue = keyExtractor(a);
      const bValue = keyExtractor(b);

      return reverse * ((aValue > bValue) ? 1 : (aValue < bValue) ? -1 : 0);
    };
  }

  // Sorting Data 
  filteredData(key: string, data: [any], reversed: any) {
    return [...data].sort(this.sort_by(key, reversed));
  }

  // filtering and split places inside the cinema array
  filterCinemaPlaces(clients: any) {
    clients.forEach((client: any) => {
      let places = '';
      let tooltip = '';
      let continous = false;
      if (client.cinemaPlace.length > 4) {
        continous = true;
        places = `
        ${client.cinemaPlace[0]}
        ,${client.cinemaPlace[1]},
        ${client.cinemaPlace[2]},
        ${client.cinemaPlace[3]}`;
        for (let i = 4; i < client.cinemaPlace.length; i++) {
          if (i != client.cinemaPlace.length - 1) {
            tooltip += `${client.cinemaPlace[i]}, `
          } else {
            tooltip += `${client.cinemaPlace[i]}`
          }
        }
      } else {
        places = `${client.cinemaPlace[0]},${client.cinemaPlace[1]},${client.cinemaPlace[2]},${client.cinemaPlace[3]}`
      }
      client.cinemaPlace = [continous, places, tooltip,]
    });
  }

};