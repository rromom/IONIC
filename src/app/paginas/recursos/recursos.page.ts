import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.page.html',
  styleUrls: ['./recursos.page.scss'],
})
export class RecursosPage implements OnInit {

  recursos: Observable<any>;

  constructor(private datosService: DataService) { }

  ngOnInit() {
    this.recursos = this.datosService.getResoucers();
  }

}
