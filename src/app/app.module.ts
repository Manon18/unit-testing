import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import 'ag-grid-enterprise';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDomarrowModule } from 'ngx-domarrow';

import { AppComponent } from './app.component';
import { DrawingComponent } from './shared/components/drawing/drawing.component';
import { DragNDropDiagramComponent } from './shared/components/drag-n-drop-diagram/drag-n-drop-diagram.component';
import { AgGridTestComponent } from './shared/components/ag-grid-test/ag-grid-test.component';
import { GojsAngularModule } from "gojs-angular";
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [
    AppComponent,
    DrawingComponent,
    DragNDropDiagramComponent,
    AgGridTestComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AgGridModule.withComponents([AppComponent]),
    AppRoutingModule,
    ReactiveFormsModule,
    NgxDomarrowModule,
    GojsAngularModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
