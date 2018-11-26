import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from './../../providers/auth/auth-service';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
/* */
pages: Array<{title: string, component: any}>;

/** */
  constructor(public navCtrl: NavController, private authService: AuthService) {
  }
  signOut(){
    this.authService.signOut()
    .then(()=>{
      this.navCtrl.setRoot(SigninPage);
    })
    .catch((error)=>{
      console.error(error);
    });
  }

  ionViewDidLoad() {
    this.pages = [
      { title: 'Sobre o App', component: 'SobrePage' },
     /* { title: 'Pontos Turisticos', component: 'Exemplo1Page' },*/
      { title: 'Mapa', component: 'Exemplo2Page' },
      { title: 'Saiba onde você está', component: 'Exemplo3Page' },
      { title: 'Definir Rota de Destino', component: 'Exemplo4Page' }

    ];
  }
  openPage(page: any) {
    this.navCtrl.push(page.component);
  }

}
