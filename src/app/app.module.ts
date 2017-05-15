/*--------------------------------------
This is the project for Wireless and Mobile Computing Subject, Year 3
at Faculty of ICT, Mahidol University
This project can be used to study. 
It cannot be used for commercial purposes.

Developed by The 3rd Year ICT Students:
Mr. Nutpapon Limsupavanich ID: 5788217 
Mr. Wasutorn Sanamchai ID: 5788243 
Miss. Wipawee Likhitaporn ID: 5788305
Miss. Supatjana Leardarpajit ID: 5788319
---------------------------------------*/

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { YearPage } from '../pages/year/year';
import { SubjectPage } from '../pages/subject/subject';
import { ListPage } from '../pages/list/list';
import { TaskPage } from '../pages/task/task';
import { ResultPage } from '../pages/result/result';
import { StatisticPage } from '../pages/statistic/statistic';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';
import { AuthService } from '../providers/auth-service';

export const firebaseConfig = { //apiKey for App's firebaseDB
  apiKey: "AIzaSyAucic-Y7IehwxzyFGTLWY22Tt55af7RpU",
  authDomain: "vocabtermstem-522ed.firebaseapp.com",
  databaseURL: "https://vocabtermstem-522ed.firebaseio.com",
  projectId: "vocabtermstem-522ed",
  storageBucket: "vocabtermstem-522ed.appspot.com",
  messagingSenderId: "426930453977"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    YearPage,
    SubjectPage,
    ListPage,
    TaskPage,
    ResultPage,
    StatisticPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    YearPage,
    SubjectPage,
    ListPage,
    TaskPage,
    ResultPage,
    StatisticPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    AuthService,
    Facebook
  ]
})
export class AppModule {}
