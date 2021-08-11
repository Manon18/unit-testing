import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawingComponent } from "./shared/components/drawing/drawing.component";
import { DragNDropDiagramComponent } from './shared/components/drag-n-drop-diagram/drag-n-drop-diagram.component';
import { AgGridTestComponent } from "./shared/components/ag-grid-test/ag-grid-test.component";

export const routes: Routes = [
  { path: 'drawing', component: DrawingComponent},
  { path: 'drag_n_drop_diagram', component: DragNDropDiagramComponent },
  { path: 'ag_grid_test', component: AgGridTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
