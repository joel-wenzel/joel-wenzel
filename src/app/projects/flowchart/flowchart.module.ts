import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgFlowchartModule } from '@joelwenzel/ng-flowchart';
import { FlowchartRoutingModule } from './flowchart-routing.module';
import { FlowchartComponent } from './flowchart.component';
import { EditStepComponent } from './standard-step/edit-step/edit-step.component';
import { StandardStepComponent } from './standard-step/standard-step.component';
import { RouterStepComponent } from './router-step/router-step.component';
import { RouteStepComponent } from './router-step/route-step/route-step.component';

@NgModule({
  declarations: [FlowchartComponent, StandardStepComponent, EditStepComponent, RouterStepComponent, RouteStepComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlowchartRoutingModule,
    NgFlowchartModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class FlowchartModule { }
