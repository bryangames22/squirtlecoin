import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from './components/contact/contact.component';
import {ContainerComponent} from './container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
