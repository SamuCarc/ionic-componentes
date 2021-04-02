import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcentaje:number;

  constructor() { }

  ngOnInit() {
  }

  cambioRango ( ev ) {
    console.log(ev);
    this.porcentaje = ev.detail.value / 100;
  }
}
