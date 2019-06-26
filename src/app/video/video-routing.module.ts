import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { VideoPage } from './video.page';
 
const routes: Routes = [
  { 
      path: '',
      component: VideoPage,
      outlet: 'video'
  },
  { 
      path: 'videoproject/:id',
      loadChildren: '../project/project.module#ProjectPageModule'
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoPageRoutingModule { }