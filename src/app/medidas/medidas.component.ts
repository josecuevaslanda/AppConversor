import {Component} from '@angular/core';

@Component({
  selector: 'app-medidas',
  templateUrl: 'medidas.component.html',
  styleUrls: ['medidas.component.css']
})

export class medidasComponent {
  cm: number;
  m: number;

  onConvertirCM(){
    this.m = this.cm / 100;
  }

  onConvertirM(){
    this.cm = this.m * 100;
  }
}

