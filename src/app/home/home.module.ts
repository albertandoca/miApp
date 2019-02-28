import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SlideComponent } from './slide/slide.component';
import { TabComponent } from './tab/tab.component';
import { AcordeonComponent } from './acordeon/acordeon.component';

@NgModule({
  declarations: [HomeComponent,
    SlideComponent,
    TabComponent,
    AcordeonComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
