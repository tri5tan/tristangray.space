import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ContactPage } from './contact.page';
 
const routes: Routes = [
  { path: '', component: ContactPage, outlet: 'contact' }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactPageRoutingModule { }