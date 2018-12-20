import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderEGComponent } from './headerEG/headerEG.component';
import { FooterEGComponent } from './footerEG/footerEG.component';
import { Tab1Component } from './tab1/tab1.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { HomeEGComponent } from './homeEG/homeEG.component';
import { NatureEGComponent } from './natureEG/natureEG.component';

import { WaterEGComponent } from './waterEG/waterEG.component';
import { WaterEGService } from './waterEG/waterEG.service';
import { WaterEGStartComponent } from './waterEG/waterEG-start/waterEG-start.component';
import { WaterEGListComponent } from './waterEG/waterEG-list/waterEG-list.component';
import { WaterEGEditComponent } from './waterEG/waterEG-edit/waterEG-edit.component';
import { WaterEGDetailComponent } from './waterEG/waterEG-detail/waterEG-detail.component';
import { WaterEGItemComponent } from './waterEG/waterEG-list/waterEG-item/waterEG-item.component';

import { CostEGComponent } from './costEG/costEG.component';

import { DestinationEGComponent } from './destinationEG/destinationEG.component';
import { DestinationEGService } from './destinationEG/destinationEG.service';
import { DestinationEGEditComponent } from './destinationEG/destinationEG-edit/destinationEG-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderEGComponent,
    FooterEGComponent,
    Tab1Component,
    DropdownDirective,
    HomeEGComponent,

    NatureEGComponent,
    
    WaterEGComponent,
    WaterEGStartComponent,
    WaterEGListComponent,
    WaterEGEditComponent,
    WaterEGDetailComponent,
    WaterEGItemComponent,

    CostEGComponent,

    DestinationEGComponent,
    DestinationEGEditComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WaterEGService, DestinationEGService],
  bootstrap: [AppComponent]
})
export class AppModule { }
