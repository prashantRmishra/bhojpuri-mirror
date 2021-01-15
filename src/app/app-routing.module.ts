import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { HindiSamacharPDFComponent } from './hindi-samachar-pdf/hindi-samachar-pdf.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { ArticleComponent } from './article/article.component';
import { SectionTabComponent } from './section-tab/section-tab.component';


const routes: Routes = [
  {path:'*',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'bhojpurimirror',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'hindisamacharpdf',component:HindiSamacharPDFComponent},
  {path:'pdf/:fileid',component:PdfViewerComponent},
  {path:'article/:fileid',component:ArticleComponent},
  {path:'section/:sectionname',component:SectionTabComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
