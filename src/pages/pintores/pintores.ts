import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VangoghPage } from '../vangogh/vangogh';

/*
  Generated class for the Pintores page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pintores',
  templateUrl: 'pintores.html'
})
export class PintoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PintoresPage');
  }
  goToVangoghPage(){
      this.navCtrl.push( VangoghPage );
  }
}
