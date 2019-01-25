import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

const components = [
  HeaderComponent,
  NotFoundComponent,
  FooterComponent
];

@NgModule({
  declarations: [...components], imports: [
    CommonModule,
    RouterModule
  ], exports: [...components]
})
export class CoreModule {}
