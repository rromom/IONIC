import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  lista: Listado[] = [
    {
      name: 'ALERTAS',
      redirecTo: '/alertas',
      icon: 'beer-outline',
    },
    {
      name: 'ACTIO-SHEET',
      redirecTo: '/action-sheet',
      icon: 'boat-outline'
    },
    {
      name: 'TARJETAS',
      redirecTo: '/tarjetas',
      icon: 'bug-outline'
    },
    {
      name: 'CLIENTES',
      redirecTo: '/clientes',
      icon: 'people-outline'
    },
    {
      name: 'RECURSOS',
      redirecTo: '/recursos',
      icon: 'calculator-outline'
    },
    {
      name: 'PERSONAJES',
      redirecTo: '/personajes',
      icon: 'person-circle-outline'
    },
    {
      name: 'CARDS',
      redirecTo: '/cards',
      icon: 'person-circle-outline'
    }
  ];
  menu: Observable<any>;
  constructor(private datosService: DataService) { }

  ngOnInit() {
    this.menu = this.datosService.getMenu();
  }

}

interface Listado{
  name: string;
  redirecTo: string;
  icon: string;
}
