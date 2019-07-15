import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppModalComponent } from './app-modal/app-modal.component';
import { BrandingModalComponent } from './branding-modal/branding-modal.component';
import { EcommerceModalComponent } from './ecommerce-modal/ecommerce-modal.component';
import { MarketingModalComponent } from './marketing-modal/marketing-modal.component';
import { WebModalComponent } from './web-modal/web-modal.component';
import { AngularMaterialModule } from '../../../angular-material.module';
import { GeneratorTextComponent } from './marketing-modal/generator-text.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  declarations: [
    AppModalComponent,
    BrandingModalComponent,
    EcommerceModalComponent,
    MarketingModalComponent,
    WebModalComponent,
    GeneratorTextComponent,
    LoaderComponent
  ],
  exports: [
    AppModalComponent,
    BrandingModalComponent,
    EcommerceModalComponent,
    MarketingModalComponent,
    WebModalComponent,
    GeneratorTextComponent,
    LoaderComponent
  ],
  entryComponents: [
    AppModalComponent,
    BrandingModalComponent,
    EcommerceModalComponent,
    MarketingModalComponent,
    WebModalComponent,
    GeneratorTextComponent,
    LoaderComponent
  ]
})
export class RenderModalsModule { }
