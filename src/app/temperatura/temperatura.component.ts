import {Component} from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: 'temperatura.component.html',
  styleUrls: ['temperatura.component.css']
})

export class temperaturaComponent {
  celsius: number;
  fahrenheit: number;

  onConvertirCelsius(){
    this.fahrenheit = (this.celsius * 9/5) + 32;
  }
  onConvertirFahrenheit(){
    this.celsius = (this.fahrenheit - 32) * 5/9;
  }

}
