import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'carrental';
  user:string = 'Cihan Koçak';
  car= {carId:1, brandName:'Ford', colorName:'Mavi', dailyPrice:300}
}
