import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { HindiSamacharPDFComponent } from './hindi-samachar-pdf/hindi-samachar-pdf.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { ArticleComponent } from './article/article.component';
import { SectionTabComponent } from './section-tab/section-tab.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateNewArticleComponent } from './article/create-new-article/create-new-article.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'bhojpurimirror',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'hindisamacharpdf',component:HindiSamacharPDFComponent},
  {path:'pdf/:fileid',component:PdfViewerComponent},
  {path:'article/:fileid',component:ArticleComponent},
  {path:'section/:sectionname',component:SectionTabComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'newarticle',component:CreateNewArticleComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
