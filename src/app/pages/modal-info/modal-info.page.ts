import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit{

  @Input() nombre;
  @Input() pais;

  @ViewChild('nombreInput') nombreInput;
  @ViewChild('paisInput') paisInput;

  constructor( private modalController:ModalController ) { }

  ngOnInit() {
  }

  salirSinArgumentos () {
    this.modalController.dismiss();
  }

  salirConArgumentos () {
    this.modalController.dismiss({
      nombre: this.nombreInput.value,
      pais: this.paisInput.value
    })
  }
}
