import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PintoresPage } from '../pintores/pintores';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 list:any[] = [];

  constructor(public navCtrl: NavController) {

     

    this.list.push({
      name: 'Guillermo Iván'
    });

    this.list.push({
      name: 'Rojo'
    });

    this.list.push({
      name: 'Orea'
    });
  }

    goToPintoresPage(){
      this.navCtrl.push( PintoresPage );

}
    

}
