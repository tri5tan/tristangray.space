import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Observable, of, throwError } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',//title: 'Home',
      url: '/home',
      icon: 'rocket' //icon: 'home' planet
    },
    {
      title: 'Video',
      url: '/video',
      icon: 'film'
    },
    {
      title: 'Code',
      url: '/code',
      icon: 'code'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'planet' //icon: 'contact'
    }
  ];
    
    screenwidth: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController 
  ) {
    this.initializeApp();
    console.log("this.platform.width() ", this.platform.width());
        
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.loadWidth();    
    });
  }
    checkWidth(w) {
        if(w < 2000) {
            this.menuCtrl.close();
        }
        else {
            this.menuCtrl.open();
        }
    }
    
    loadWidth() {
        this.platformWidth()
            .subscribe(res => {
                console.log(res);
                //this.screenwidth = res;
                this.checkWidth(res);
        }, err => {
            console.log(err);
        });
    }
    
    platformWidth(): Observable<any> {
        let platfromObserver = Observable.create(observer => {
            observer.next(this.platform.width());
        });
        return platfromObserver;
    }
 
    
}
