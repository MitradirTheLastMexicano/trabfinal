import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from './../../providers/auth/user';
import { AuthService } from './../../providers/auth/auth-service';
import { HomePage } from './../home/home';
import { SignupPage } from './../signup/signup';
import { ResetpasswordPage } from './../resetpassword/resetpassword';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController,
     private ToastCtrl: ToastController,
     private AuthService: AuthService) {
  }
  createAccount(){
    this.navCtrl.push(SignupPage);
  }
  resetpassword(){
    this.navCtrl.push(ResetpasswordPage);
  }
  signIn(){
    if(this.form.form.valid){
      this.AuthService.signIn(this.user)
      .then(()=>{
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error:any)=>{
        let toast = this.ToastCtrl.create({duration:3000,position:'botton'});
        if (error.code == 'auth/invalid-email'){
          toast.setMessage('O e-mail digitado não é valido');
        }
        else if (error.code == 'auth/user-disable'){
          toast.setMessage('O usuário está desativado');
        }
        else if (error.code == 'auth/user-not-found'){
          toast.setMessage('O usuário não foi encontrado.');
        }
        else if (error.code == 'auth/wrong-password'){
          toast.setMessage('A senha digitada não é valida.');
        }
        toast.present();
      });
    }
  }
}
