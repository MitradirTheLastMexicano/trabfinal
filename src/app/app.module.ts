
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from './../pages/signup/signup';
import { SigninPage } from './../pages/signin/signin';
import { ResetpasswordPage } from './../pages/resetpassword/resetpassword';

import { AuthService} from '../providers/auth/auth-service';
import { Geolocation } from '@ionic-native/geolocation';

const firebaseConfig = {

    apiKey: "AIzaSyDyyRr7Ku0LNQZYlZy7r75jAPhAGTCae-o",
    authDomain: "meu-projeto-462d4.firebaseapp.com",
    databaseURL: "https://meu-projeto-462d4.firebaseio.com",
    projectId: "meu-projeto-462d4",
    storageBucket: "meu-projeto-462d4.appspot.com",
    messagingSenderId: "664479477354"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ResetpasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ResetpasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    Geolocation
  ]
})
export class AppModule {}
