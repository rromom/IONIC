import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getClients(){
    return this.http.get('http://jsonplaceholder.typicode.com/users ');
  }

  public getResoucers(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  public getMenu(){
    return this.http.get('/assets/data/listado.json');
  }

  public getchamp(){
    return this.http.get('http://ddragon.leagueoflegends.com/cdn/11.2.1/data/en_US/champion.json');
  }
}
