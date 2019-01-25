import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewViewComponent } from './pages/overview-view/overview-view.component';
import { OverviewRoutingModule } from './overview-routing.module';

@NgModule({
  declarations: [OverviewViewComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
