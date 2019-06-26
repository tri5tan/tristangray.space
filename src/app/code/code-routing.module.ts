import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CodePage } from './code.page';
// import { ProjectPage } from './project/project.page';

const routes: Routes = [
  { 
      path: '',
      component: CodePage,
      outlet: 'code'
  }/*,
  { 
      path: 'project/:id',
      component: ProjectPage
  } */,
  { 
      path: 'codeproject/:id',
      loadChildren: '../project/project.module#ProjectPageModule'
  }
    
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodePageRoutingModule { }