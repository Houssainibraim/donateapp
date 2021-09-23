import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})
export class AnnoncePage implements OnInit {

  constructor(public alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Alert',
      message: 'Annonce crée avec succès !',
      buttons: ["D'accord"]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  ngOnInit() {
  }

}
