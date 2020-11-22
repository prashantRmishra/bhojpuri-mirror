import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import{MatInputModule} from '@angular/material/input'
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import { HindiSamacharPDFComponent } from './hindi-samachar-pdf/hindi-samachar-pdf.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeedbackComponent,
    HomeComponent,
    HindiSamacharPDFComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,  
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCommonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
    
    
    
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
