import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const config = {
  apiKey: "AIzaSyDl7m6fkOooFIya9Trb2NwOJsmkzApIVTc",
  authDomain: "joelwenzel-45c43.firebaseapp.com",
  projectId: "joelwenzel-45c43",
  storageBucket: "joelwenzel-45c43.appspot.com",
  messagingSenderId: "642544165921",
  appId: "1:642544165921:web:1a335e14e685694677ef60",
  measurementId: "G-EG8T8945K9"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'github',
      domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/github.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      'npm',
      domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/npm.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/linkedin.svg`)
    );
  }
}
