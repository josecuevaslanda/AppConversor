import {Component} from '@angular/core';

@Component({
  selector: 'app-divisa',
  templateUrl: 'divisa.component.html',
  styleUrls: ['divisa.component.css']
})

export class divisaComponent {
  pesos: number;
  dolares: number;
  tipoCambio: number;

  onConvertirDolares(){
    this.pesos = this.dolares * this.tipoCambio;
  }
  onConvertirPesos(){
    this.dolares = this.pesos / this.tipoCambio;
  }
  onTipodeCambio(){
    this.pesos = this.dolares * this.tipoCambio;
    this.dolares = this.pesos / this.tipoCambio;
  }
}
