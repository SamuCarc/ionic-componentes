import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo:string;

  constructor(private alertController:AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'cancelRed',
          handler: () => {
            console.log('Btn Cancel');
          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Btn OK');
          }
        },
      ]
    });

    await alert.present();
  }

  async presentAlertInput() {
    const alert = await this.alertController.create({
      header: 'Alert Input',
      subHeader: 'Indica un nuevo título para esta página.',
      inputs:[
        {
          name: 'idTitulo',
          type: 'text',
          placeholder: 'Título',
          value: this.titulo,
          attributes: {
            maxLength: 20
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'cancelRed',
          handler: () => {
            console.log('Btn Cancel');
          }
        },
        {
          text: 'Guardar',
          handler: ( data ) => {
            this.titulo = data.idTitulo;
          }
        },
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
