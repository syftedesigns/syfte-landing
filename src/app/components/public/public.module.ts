import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrandingComponent } from './branding/branding.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { MarketingComponent } from './marketing/marketing.component';
import { WebComponent } from './web/web.component';
import { AppAdsComponent } from './app/app.component';
import { RenderModalsModule } from './shared/render-modals.module';
import { AngularMaterialModule } from '../../angular-material.module';
import { PublicRoutingModule } from './public.routes';
import { StaticModule } from '../static/static.module';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RenderModalsModule,
    AngularMaterialModule,
    PublicRoutingModule,
    StaticModule,
    ParticlesModule
  ],
  declarations: [
    BrandingComponent,
    EcommerceComponent,
    MarketingComponent,
    WebComponent,
    AppAdsComponent
  ]
})
export class PublicModule { }
