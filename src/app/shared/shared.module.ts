import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    FooterComponent
  ],
  exports:[
    SidebarComponent,
    FooterComponent,
    MenuComponent
  ]
  ,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
