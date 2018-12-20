import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeEGComponent } from './homeEG/homeEG.component';
import { Tab1Component } from './tab1/tab1.component';
import { NatureEGComponent } from './natureEG/natureEG.component';

import { WaterEGComponent } from './waterEG/waterEG.component';
import { WaterEGStartComponent } from './waterEG/waterEG-start/waterEG-start.component';
import { WaterEGDetailComponent } from'./waterEG/waterEG-detail/waterEG-detail.component';
import { WaterEGEditComponent } from './waterEG/waterEG-edit/waterEG-edit.component';

import { DestinationEGComponent } from './destinationEG/destinationEG.component';
import { CostEGComponent } from './costEG/costEG.component';

const appRoutes : Routes=[
    {path: '',redirectTo: '/homeEG', pathMatch:'full'},
    {path: 'homeEG',component: HomeEGComponent},
    {path: 'tab1',component : Tab1Component},
    {path: 'natureEG',component: NatureEGComponent},
    {path: 'waterEG',component: WaterEGComponent,children:[
        {path: '',component:WaterEGStartComponent},
        {path: 'new',component: WaterEGEditComponent},
        {path: ':id',component:WaterEGDetailComponent},
        {path: ':id/edit',component:WaterEGEditComponent}
    ]},
    {path: 'destinationEGs',component: DestinationEGComponent},
    {path: 'costEG',component: CostEGComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}