import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorPaisComponent } from './paices/pages/por-pais/por-pais.component';
import { PorCapitalComponent } from './paices/pages/por-capital/por-capital.component';
import { PorRegionComponent } from './paices/pages/por-region/por-region.component';
import { VerPaisComponent } from './paices/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'prefix'
    },
    {
        path: 'capital',
        component: PorCapitalComponent,
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent,
    },
    {
        path: '**',
        redirectTo:''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[ 
        RouterModule
    ]
})
export class AppRoutingModule{
}
