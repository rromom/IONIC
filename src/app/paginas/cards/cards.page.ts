import { Component, OnInit } from '@angular/core';
import { Champion } from 'src/app/intefaces/champion';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  champions: Champion[];

  constructor(private datosServicio: DataService) { }

  ngOnInit() {
    this.datosServicio.getchamp().subscribe((data: any) => {
      this.champions = Object.values(data.data);
      console.log(this.champions);
    });
  }

}
