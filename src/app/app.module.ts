import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input'
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'
import { HindiSamacharPDFComponent } from './hindi-samachar-pdf/hindi-samachar-pdf.component'
import { HttpClientModule } from '@angular/common/http';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { ToastrModule } from 'ngx-toastr'
import { MatIconModule } from '@angular/material/icon';
import { ModelPopupComponent } from './popup/model-popup/model-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ArticleComponent } from './article/article.component';
import { MatCardModule } from '@angular/material/card'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SectionTabComponent } from './section-tab/section-tab.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateNewArticleComponent } from './article/create-new-article/create-new-article.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeedbackComponent,
    HomeComponent,
    HindiSamacharPDFComponent,
    PdfViewerComponent,
    ModelPopupComponent,
    ArticleComponent,
    SectionTabComponent,
    LoginComponent,
    ForgotPasswordComponent,
    CreateNewArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCommonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MaterialFileInputModule,
    HttpClientModule,
    PdfViewerModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
    MatCardModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD2R0VWVAyrPLOeu4DVIFg0OW9TUp1lWF0",
      authDomain: "bhojpurimirror-fc928.firebaseapp.com",
      projectId: "bhojpurimirror-fc928",
      storageBucket: "bhojpurimirror-fc928.appspot.com",
      messagingSenderId: "577782764951",
      appId: "1:577782764951:web:92334d9833c01ce4b8e0d2",
      measurementId: "G-61CYQSFYF4"
    }),
    AngularFirestoreModule,
    AngularFireStorageModule








  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModelPopupComponent]
})
export class AppModule { }
