import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public form555: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form555 = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      mail: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^[a-z_-]{8,15}$')]]
    });
  }

  enviar() {
    if (this.form555.valid){
      alert('los datos son correctos');
    } else {
      alert('los datos tienen errores');
      console.log(this.form555.getError);
    }
    console.log(this.form555.get('mail').value);
    console.log(this.form555.get('mail').errors);
    this.form555.controls['mail'].setValue('dfhjfhksd@dsfsdf.vvv');
  }

}
