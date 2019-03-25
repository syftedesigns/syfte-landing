import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticModule } from './static/static.module';
import { AboutComponent } from './about/about.component';
import { CasesComponent } from './cases/cases.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PageRoutingModule } from './pages.routes';
import { AngularMaterialModule } from '../angular-material.module';
@NgModule({
  imports: [
    CommonModule,
    StaticModule,
    RouterModule,
    FormsModule,
    PageRoutingModule,
    AngularMaterialModule
  ],
  declarations: [
    AboutComponent,
    CasesComponent,
    ContactComponent,
    HomeComponent
  ]
})
export class PagesModule { }
