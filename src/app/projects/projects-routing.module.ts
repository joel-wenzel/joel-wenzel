import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'flowchart',
    pathMatch: 'full'
  },
  {
    path: 'flowchart', loadChildren: () => import('./flowchart/flowchart.module').then(m => m.FlowchartModule)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
