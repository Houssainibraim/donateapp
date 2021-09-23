import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-editing',
  templateUrl: './editing.page.html',
  styleUrls: ['./editing.page.scss'],
})
export class EditingPage implements OnInit {
  descriptionProject;
  titleProject;
  constructor(public alertController: AlertController) { 
    this.titleProject = "Construction d'une mosquee";
    this.descriptionProject = "En mars, la municipalité avait provoqué un tollé après avoir accordé une subvention pour la mosquée Eyyûb Sultan, gérée par la Confédération islamique Milli Görüs, une organisation d’origine turque. La demande de financement a depuis été retirée.";
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Alert',
      message: 'Annonce vérifier !',
      buttons: ["D'accord"]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  ngOnInit() {
  }

}
