import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SlideComponent } from './slide/slide.component';
import { TabComponent } from './tab/tab.component';
import { AcordeonComponent } from './acordeon/acordeon.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: 'slide', component: SlideComponent},
    {path: 'tab', component: TabComponent},
    {path: 'acordeon', component: AcordeonComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
