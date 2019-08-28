import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components to share
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AdvertisingComponent } from './slide/advertising/advertising.component';
import { AppComponent } from './slide/app/app.component';
import { BackendComponent } from './slide/backend/backend.component';
import { BrandingComponent } from './slide/branding/branding.component';
import { MarketingComponent } from './slide/marketing/marketing.component';
import { UxComponent } from './slide/ux/ux.component';
import { VisualComponent } from './slide/visual/visual.component';
import { WebDesignComponent } from './slide/web-design/web-design.component';
import { ButtonSliderComponent } from './button-slider/button-slider.component';
import { ContactHistoryComponent } from './contact-history/contact-history.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FormsModule } from '@angular/forms';
import { VideoModalComponent } from './video/video-modal.component';
import { MenuADSComponent } from './ads/menu-ads/menu-ads.component';
import { HomeVideoComponent } from './video/home-video/home-video.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    MenuComponent,
    AdvertisingComponent,
    AppComponent,
    BackendComponent,
    BrandingComponent,
    MarketingComponent,
    UxComponent,
    VisualComponent,
    WebDesignComponent,
    ButtonSliderComponent,
    ContactHistoryComponent,
    VideoModalComponent,
    MenuADSComponent,
    HomeVideoComponent
  ],
  exports: [
    FooterComponent,
    MenuComponent,
    AdvertisingComponent,
    AppComponent,
    BackendComponent,
    BrandingComponent,
    MarketingComponent,
    UxComponent,
    VisualComponent,
    WebDesignComponent,
    ButtonSliderComponent,
    ContactHistoryComponent,
    VideoModalComponent,
    MenuADSComponent,
    HomeVideoComponent
  ],
  entryComponents: [
    AdvertisingComponent,
    BackendComponent,
    AppComponent,
    BrandingComponent,
    UxComponent,
    VisualComponent,
    WebDesignComponent,
    VideoModalComponent,
    MenuADSComponent,
    HomeVideoComponent
  ]
})
export class StaticModule { }
