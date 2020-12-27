import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgFlowchartModule } from '@joelwenzel/ng-flowchart';
import { FlowchartRoutingModule } from './flowchart-routing.module';
import { FlowchartComponent } from './flowchart.component';

@NgModule({
  declarations: [FlowchartComponent],
  imports: [
    CommonModule,
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
