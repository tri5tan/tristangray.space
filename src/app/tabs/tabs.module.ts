import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

/*const routes: Routes = [
  {
    path: '',
    component: TabsPage
  }
]; */

import { ContactPageModule } from '../contact/contact.module';
import { CodePageModule } from '../code/code.module';
import { HomePageModule } from '../home/home.module';
import { VideoPageModule } from '../video/video.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   // RouterModule.forChild(routes),
      CodePageModule,
      HomePageModule,
      VideoPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
