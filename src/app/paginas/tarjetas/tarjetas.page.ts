import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.page.html',
  styleUrls: ['./tarjetas.page.scss'],
})
export class TarjetasPage implements OnInit {

  Campeon: Campeones[] = [
    {
      name: 'Ahri',
      url: '/assets/ahri.jpg'
    },
    {
      name: 'Ashe',
      url: '/assets/ashe.jpg'
    },
    {
      name: 'Irelia',
      url: '/assets/irelia.jpg'
    },
    {
      name: 'kayn',
      url: '/assets/kayn.jpg'
    },
    {
      name: 'Miss Fortune',
      url: '/assets/miss.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface Campeones{
  name: string;
  url: string;
}
