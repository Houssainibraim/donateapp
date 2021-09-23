import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit {
  name;
  descriptionProject;
  titleOfProject;
  coins;
  constructor(public alertController: AlertController) { 
    this.name = "Merhaba";
    this.titleOfProject = "Construction d'une mosquee";
    this.descriptionProject = "En mars, la municipalité avait provoqué un tollé après avoir accordé une subvention pour la mosquée Eyyûb Sultan, gérée par la Confédération islamique Milli Görüs, une organisation d’origine turque. La demande de financement a depuis été retirée.";
    this.coins = 5000;

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Alert',
      message: 'Merci !',
      buttons: ["Fermer"]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
  }

}
