import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CodePageRoutingModule } from './code-routing.module';
import { CodePage } from './code.page';
//import { ProjectPage } from './project/project.page';

const routes: Routes = [
  {
    path: '',
    component: CodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CodePageRoutingModule
  ],
  declarations: [
    CodePage//,
  //  ProjectPage
  ]
})
export class CodePageModule {}
