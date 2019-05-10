import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MarketingComponent } from './marketing/marketing.component';
import { BrandingComponent } from './branding/branding.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { AppAdsComponent } from './app/app.component';
import { WebComponent } from './web/web.component';


const routes: Routes = [
    {
        path: 'marketing',
        component: MarketingComponent,
        data: {Title: 'Create your marketing campaign today | Syftedesigns.com'}
    },
    {
        path: 'branding',
        component: BrandingComponent,
        data: {Title: 'Create your own brand with Syfte | Syftedesigns.com'}
    },
    {
        path: 'ecommerce',
        component: EcommerceComponent,
        data: {Title: 'Create your own online store with Syfte | Syftedesigns.com'}
    },
    {
        path: 'apps',
        component: AppAdsComponent,
        data: {Title: 'Start your own app today with Syfte | Syftedesigns.com'}
    },
    {
        path: 'website',
        component: WebComponent,
        data: {Title: 'Create your own website today with Syfte | Syftedesigns.com'}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}
