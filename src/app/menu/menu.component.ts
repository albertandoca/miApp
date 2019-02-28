import { Menus } from './../modelos/menus';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menus[];
  constructor() { }

  ngOnInit() {
    this.menus = [
      {
        tag: 'Inicio',
        url: '/home'
      },
      {
        tag: 'Contactos',
        url: '/contactos'
      },
      {
        tag: 'Formulario',
        url: '/formulario'
      },
      {
        tag: 'otro',
        url: '/otro'
      }
    ];
  }

}
