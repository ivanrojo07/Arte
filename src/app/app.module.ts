import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PintoresPage } from '../pages/pintores/pintores';
import { VangoghPage } from '../pages/vangogh/vangogh';
import { NocheestrelladaPage } from '../pages/nocheestrellada/nocheestrellada';
import { AlmendroPage } from '../pages/almendro/almendro';
import { AutoretratoPage } from '../pages/autoretrato/autoretrato';
import { BochPage } from '../pages/boch/boch';
import { CafenochePage } from '../pages/cafenoche/cafenoche';
import { CampocipresesPage } from '../pages/campocipreses/campocipreses';
import { CasaamarillaPage } from '../pages/casaamarilla/casaamarilla';
import { ComepapasPage } from '../pages/comepapas/comepapas';
import { DolorPage } from '../pages/dolor/dolor';
import { DormitorioPage } from '../pages/dormitorio/dormitorio';
import { ElvinedoPage } from '../pages/elvinedo/elvinedo';
import { GinouxPage } from '../pages/ginoux/ginoux';
import { LaiglesiaPage } from '../pages/laiglesia/laiglesia';
import { LiriosPage } from '../pages/lirios/lirios';
import { NocherodanoPage } from '../pages/nocherodano/nocherodano';
import { PaulgachetPage } from '../pages/paulgachet/paulgachet';
import { TerrazaPage } from '../pages/terraza/terraza';
import { TrigalPage } from '../pages/trigal/trigal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PintoresPage,
    VangoghPage,
    NocheestrelladaPage,
    AlmendroPage,
    AutoretratoPage,
    BochPage,
    CafenochePage,
    CampocipresesPage,
    CasaamarillaPage,
    ComepapasPage,
    DolorPage,
    DormitorioPage,
    ElvinedoPage,
    GinouxPage,
    LaiglesiaPage,
    LiriosPage,
    NocherodanoPage,
    PaulgachetPage,
    TerrazaPage,
    TrigalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PintoresPage,
    VangoghPage,
    NocheestrelladaPage,
    AlmendroPage,
    AutoretratoPage,
    BochPage,
    CafenochePage,
    CampocipresesPage,
    CasaamarillaPage,
    ComepapasPage,
    DolorPage,
    DormitorioPage,
    ElvinedoPage,
    GinouxPage,
    LaiglesiaPage,
    LiriosPage,
    NocherodanoPage,
    PaulgachetPage,
    TerrazaPage,
    TrigalPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
