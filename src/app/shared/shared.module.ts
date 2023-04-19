import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LoadingSpinnerComponent,

  ],
  exports:[
    SidebarComponent,
    LoadingSpinnerComponent
  ]
  ,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
