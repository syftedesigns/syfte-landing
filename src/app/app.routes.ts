import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './components/pages.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PublicComponent } from './components/public/public.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        loadChildren: './components/pages.module#PagesModule'
    },
    {
        path: 'campaign',
        component: PublicComponent,
        loadChildren: './components/public/public.module#PublicModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const SYFTE_ROUTES = RouterModule.forRoot(routes, {
    useHash: false,
    preloadingStrategy: PreloadAllModules
});
