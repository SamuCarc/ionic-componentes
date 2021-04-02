import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista : IonList;

  usuarios: Observable<any>;

  constructor( 
    private dataService:DataService,
    private toastController:ToastController
    ) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  async presentToast( message:string ) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  favorite (user) {
    this.presentToast("Contacto "+ user.email + " guardado en favoritos");
    this.lista.closeSlidingItems();
  }

  share (user) {
    this.presentToast("Ha compartido su contacto - "+ user.email);
    this.lista.closeSlidingItems();
  }

  trash (user) {
    this.presentToast("Borrado "+ user.email);
    this.lista.closeSlidingItems();
  }

}
