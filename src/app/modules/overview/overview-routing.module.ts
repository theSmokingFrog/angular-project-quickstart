import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OverviewViewComponent } from './pages/overview-view/overview-view.component';
import { ButtonShowcaseComponent } from './components/button-showcase/button-showcase.component';
import { ContentShowcaseComponent } from './components/content-showcase/content-showcase.component';
import { FormShowcaseComponent } from './components/form-showcase/form-showcase.component';
import { HeroShowcaseComponent } from './components/hero-showcase/hero-showcase.component';
import { TypographyShowcaseComponent } from './components/typography-showcase/typography-showcase.component';

const routes: Routes = [
  {
    path: '', component: OverviewViewComponent, children: [
      {
        path: 'buttons', component: ButtonShowcaseComponent
      },
      {
        path: 'contents', component: ContentShowcaseComponent
      },
      {
        path: 'forms', component: FormShowcaseComponent
      },
      {
        path: 'heroes', component: HeroShowcaseComponent
      },
      {
        path: 'tables', component: TypographyShowcaseComponent
      }
    ]
  }
];

@NgModule({
  declarations: [], imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class OverviewRoutingModule {}
