import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormularioModule { }
