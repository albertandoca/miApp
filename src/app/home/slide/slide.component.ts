import { Slide } from './../../modelos/slide';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
slides: Slide[];

  constructor() { }

  ngOnInit() {
    this.slides = [
      {
        urlImagen: '../../../assets/img/foto1.jpeg',
        alt: 'img',
        titulo: 'La foto más bonita',
        texto: 'Colocalmos un pie de página',
      },
      {
        urlImagen: '../../../assets/img/foto2.jpeg',
        alt: 'img',
        titulo: 'La foto más bonita',
        texto: 'Colocalmos un pie de página',
      },
      {
        urlImagen: '../../../assets/img/foto3.jpeg',
        alt: 'img',
        titulo: 'La foto más bonita',
        texto: 'Colocalmos un pie de página',
      },
      {
        urlImagen: '../../../assets/img/foto1.jpeg',
        alt: 'img',
        titulo: 'La foto más bonita 111',
        texto: 'Colocalmos un pie de página',
      },
      {
        urlImagen: '../../../assets/img/foto2.jpeg',
        alt: 'img',
        titulo: 'La foto más bonita 222',
        texto: 'Colocalmos un pie de página',
      },
      {
        urlImagen: '../../../assets/img/foto3.jpeg',
        alt: 'img',
        titulo: 'La foto más bonita 333',
        texto: 'Colocalmos un pie de página',
      },
      {
        urlImagen: '../../../assets/img/foto1.jpeg',
        alt: 'img',
        titulo: 'La foto más bonita hhh',
        texto: 'Colocalmos un pie de página',
      },
    ];
  }

}
