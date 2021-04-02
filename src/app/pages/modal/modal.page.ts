import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  nombre:string='Samuel';
  pais:string='Cuba';

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  async abrirModal () {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: this.nombre,
        pais: this.pais
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log("Retorno del modal: ",data );
    this.nombre = data.nombre;
    this.pais = data.pais;
  }
  
}
