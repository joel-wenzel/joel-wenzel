import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule
  ]
})
export class ProjectsModule { 
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'github',
      domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/github.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      'npm',
      domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/npm.svg`)
    );
  }
}
