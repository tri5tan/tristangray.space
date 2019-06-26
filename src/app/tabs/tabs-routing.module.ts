import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
/*import { HomePage } from '../home/home.page';
import { CodePage } from '../code/code.page';
import { VideoPage } from '../video/video.page';
import { ContactPage } from '../contact/contact.page';*/

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      /*{
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },*/
      {
        path: 'home',
        outlet: 'home',
        //component: HomePage
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'code',
        outlet: 'code',
        //component: CodePage
        loadChildren: '../code/code.module#CodeModule'  
      },
      {
        path: 'video',
        outlet: 'video',
        //component: VideoPage
        loadChildren: '../video/video.module#VideoModule'  
      }
        /*,
      {
        path: 'contact',
        outlet: 'contact',
        //component: ContactPage
        loadChildren: '../contact/contact.module#ContactModule'  
      }*/
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
