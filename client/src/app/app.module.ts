import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './createaccount/createaccount.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CoverComponent } from './home/cover/cover.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CreateformationComponent } from './formation/createformation/createformation.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { FormationComponent } from './formation/formation.component';
import { CertificationComponent } from './certification/certification.component';
import { GererComponent } from './certification/gerer/gerer.component';
import { UserComponent } from './user/user.component';
import { CertificationViewComponent } from './certification-view/certification-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
    NotfoundComponent,
    CoverComponent,
    CreateformationComponent,
    FormationComponent,
    CertificationComponent,
    GererComponent,
    UserComponent,
    CertificationViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatRadioModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
