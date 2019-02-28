import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';

@NgModule({
  declarations: [ContactosComponent],
  imports: [
    CommonModule,
    ContactosRoutingModule,
    NgbModule
  ]
})
export class ContactosModule { }
