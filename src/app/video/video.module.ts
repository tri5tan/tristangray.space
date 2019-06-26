import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideoPage } from './video.page';

//import { VimeoVideosService } from '../vimeo-videos.service';
import { Observable} from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: VideoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideoPage]//,
//providers: [VimeoVideosService]
})
export class VideoPageModule {}
