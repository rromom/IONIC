import { Component, OnInit } from '@angular/core';
import { Champion } from 'src/app/intefaces/champion';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  champions: Champion [];
  constructor(private datosServicio: DataService) { }

  ngOnInit() {
    this.datosServicio.getchamp().subscribe((data: any) => {
      this.champions = Object.values(data.data);
      console.log(this.champions);
    });

  }
}
