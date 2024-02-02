import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularTask1'; 
  isLoading = true;
  constructor(){
    window.setTimeout(()=>{
      this.isLoading = false;
    },2000)
  }
}
