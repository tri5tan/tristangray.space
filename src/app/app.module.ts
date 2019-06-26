import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//import { ServiceWorkerModule } from '@angular/service-worker';
//import { ENV } from '@env';

import { ProjectService } from './project.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    // ENV.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  //  ServiceWorkerModule.register('/ngsw-worker.js', { enabled: ENV.production })  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
