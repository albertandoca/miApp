import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'contactos', loadChildren: './contactos/contactos.module#ContactosModule'},
  {path: 'formulario', loadChildren: './formulario/formulario.module#FormularioModule'},
  {path: 'not-found', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
