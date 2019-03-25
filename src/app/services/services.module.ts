import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SliderService } from './slideshow/slider.service';
import { MenuService } from './menu/menu.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [],
  providers: [
    SliderService,
    MenuService
  ]
})
export class ServicesModule { }
