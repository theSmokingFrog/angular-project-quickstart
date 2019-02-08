import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

const components = [
  HeaderComponent,
  NotFoundComponent,
  FooterComponent
];

@NgModule({
  imports:      [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forChild()
  ],
  declarations: [...components],
  exports:      [...components]
})
export class CoreModule {}
