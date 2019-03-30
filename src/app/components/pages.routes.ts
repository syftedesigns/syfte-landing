import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CasesComponent } from './cases/cases.component';
import { ContactComponent } from './contact/contact.component';
import { FormSendComponent } from './form-send/form-send.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {Title: 'We Build your brand'}
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {Title: 'About us'}
    },
    {
        path: 'cases',
        component: CasesComponent,
        data: {Title: 'Our Cases'}
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: {Title: 'Contact Us'}
    },
    {
        path: 'thank',
        component: FormSendComponent,
        data: {Title: 'Thank You'}
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {}
