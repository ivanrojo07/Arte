import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NocheestrelladaPage } from '../nocheestrellada/nocheestrellada';
import { AlmendroPage } from '../almendro/almendro';
import { AutoretratoPage } from '../autoretrato/autoretrato';
import { BochPage } from '../boch/boch';
import { CafenochePage } from '../cafenoche/cafenoche';
import { CampocipresesPage } from '../campocipreses/campocipreses';
import { CasaamarillaPage } from '../casaamarilla/casaamarilla';
import { ComepapasPage } from '../comepapas/comepapas';
import { DolorPage } from '../dolor/dolor';
import { DormitorioPage } from '../dormitorio/dormitorio';
import { ElvinedoPage } from '../elvinedo/elvinedo';
import { GinouxPage } from '../ginoux/ginoux';
import { LaiglesiaPage } from '../laiglesia/laiglesia';
import { LiriosPage } from '../lirios/lirios';
import { NocherodanoPage } from '../nocherodano/nocherodano';
import { PaulgachetPage } from '../paulgachet/paulgachet';
import { TerrazaPage } from '../terraza/terraza';
import { TrigalPage } from '../trigal/trigal';


/*
  Generated class for the Vangogh page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vangogh',
  templateUrl: 'vangogh.html'
})
export class VangoghPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad VangoghPage');
  }

  goToNocheestrelladaPage(){
      this.navCtrl.push( NocheestrelladaPage );
  }
  goToAlmendroPage(){
      this.navCtrl.push( AlmendroPage );
  }
  goToAutoretratoPage(){
      this.navCtrl.push( AutoretratoPage );
  }
  goToBochPage(){
      this.navCtrl.push( BochPage );
  }
  goToCafenochePage(){
      this.navCtrl.push( CafenochePage );
  }
  goToCampocipresesPage(){
      this.navCtrl.push( CampocipresesPage );
  }
  goToCasaamarillaPage(){
      this.navCtrl.push( CasaamarillaPage );
  }
  goToComepapasPage(){
      this.navCtrl.push( ComepapasPage );
  }
  goToDolorPage(){
      this.navCtrl.push( DolorPage );
  }
  goToDormitorioPage(){
      this.navCtrl.push( DormitorioPage );
  }
  goToElvinedoPage(){
      this.navCtrl.push( ElvinedoPage );
  }
  goToGinouxPage(){
      this.navCtrl.push( GinouxPage );
  }
  goToLaiglesiaPage(){
      this.navCtrl.push( LaiglesiaPage );
  }
  goToLiriosPage(){
      this.navCtrl.push( LiriosPage );
  }
  goToNocherodanoPage(){
      this.navCtrl.push( NocherodanoPage );
  }
  goToPaulgachetPage(){
      this.navCtrl.push( PaulgachetPage );
  }
  goToTerrazaPage(){
      this.navCtrl.push( TerrazaPage );
  }
  goToTrigalPage(){
      this.navCtrl.push( TrigalPage );
  }

}
