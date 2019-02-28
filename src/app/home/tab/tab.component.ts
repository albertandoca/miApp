import { Component, OnInit, ViewChild } from '@angular/core';
import { Noticas } from '../../modelos/noticas';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  noticias: Noticas[];
  tituloNoticia: String;
  textoNoticia: String;
  fechaNoticia: String;
  @ViewChild('noticiaFull') noticiaFull;


  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.noticias = [
      { titulo: 'Mi primera nocticia1',
        texto: 'ldksjfñlksjdf ñlsjd fñaj sldj fñlhdf asdjh alksdjhf aljf lajkhf alkjfh lah aljd',
        urlImagen: '../../../assets/img/personas.png',
        fechaPublicacion: new Date()},
        { titulo: 'Mi primera nocticia2',
        texto: 'ldksjfñlksjdf ñlsjd fñaj sldj fñlhdf asdjh alksdjhf aljf lajkhf alkjfh lah aljd',
        urlImagen: '../../../assets/img/personas.png',
        fechaPublicacion: new Date()},
        { titulo: 'Mi primera nocticia3',
        texto: 'ldksjfñlksjdf ñlsjd fñaj sldj fñlhdf asdjh alksdjhf aljf lajkhf alkjfh lah aljd',
        urlImagen: '../../../assets/img/personas.png',
        fechaPublicacion: new Date()},
        { titulo: 'Mi primera nocticia4',
        texto: 'ldksjfñlksjdf ñlsjd fñaj sldj fñlhdf asdjh alksdjhf aljf lajkhf alkjfh lah aljd',
        urlImagen: '../../../assets/img/personas.png',
        fechaPublicacion: new Date()},
        { titulo: 'Mi primera nocticia5',
        texto: 'ldksjfñlksjdf ñlsjd fñaj sldj fñlhdf asdjh alksdjhf aljf lajkhf alkjfh lah aljd',
        urlImagen: '../../../assets/img/personas.png',
        fechaPublicacion: new Date()},
        { titulo: 'Mi primera nocticia',
        texto: 'ldksjfñlksjdf ñlsjd fñaj sldj fñlhdf asdjh alksdjhf aljf lajkhf alkjfh lah aljd',
        urlImagen: '../../../assets/img/personas.png',
        fechaPublicacion: new Date()},
        { titulo: 'Mi primera nocticia',
        texto: 'ldksjfñlksjdf ñlsjd fñaj sldj fñlhdf asdjh alksdjhf aljf lajkhf alkjfh lah aljd',
        urlImagen: '../../../assets/img/personas.png',
        fechaPublicacion: new Date()},
        { titulo: 'Mi primera nocticia',
        texto: 'ldksjfñlksjdf ñlsjd fñaj sldj fñlhdf asdjh alksdjhf aljf lajkhf alkjfh lah aljd',
        urlImagen: '../../../assets/img/personas.png',
        fechaPublicacion: new Date()},
        { titulo: 'Mi primera nocticia',
        texto: 'ldksjfñlksjdf ñlsjd fñaj sldj fñlhdf asdjh alksdjhf aljf lajkhf alkjfh lah aljd',
        urlImagen: '../../../assets/img/personas.png',
        fechaPublicacion: new Date()},

    ];
  }

  verNoticia(componente, index) {
    this.tituloNoticia = this.noticias[index].titulo;
    this.textoNoticia = this.noticias[index].texto;
    this.fechaNoticia = this.noticias[index].fechaPublicacion.toString();

    this.modalService.open(componente);
  }

}
