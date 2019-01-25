import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeViewComponent], imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
