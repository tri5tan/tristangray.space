import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactPageModule'
  },
  {
    path: 'video',
    loadChildren: './video/video.module#VideoPageModule'
  },
  { 
    path: 'code',
    loadChildren: './code/code.module#CodePageModule' 
  },
  { 
      path: 'videoproject/:id', //path: 'project/*', // 
      loadChildren: './project/project.module#ProjectPageModule' // redirectTo: 'code' //
  },
  { 
      path: 'codeproject/:id', 
      loadChildren: './project/project.module#ProjectPageModule'
  }
]; 
/*const routes: Routes = [
    {
        path: '', 
        loadChildren: './tabs/tabs.module#TabsPageModule'
    },
      {
        path: 'contact',
       // outlet: 'contact',
        //component: ContactPage
        loadChildren: '../contact/contact.module#ContactModule'  
      }
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
