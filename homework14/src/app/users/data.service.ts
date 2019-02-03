import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  getUserByID(id): any {
    let data = JSON.parse(localStorage.getItem('data_object'))['results']
    return data.filter(d => id === d.login.uuid)
    // throw new Error("Method not implemented.");
  }
  private myHeader;
  constructor(public http: HttpClient) { }

  getOnlineData(){
    // this.http.get
    this.myHeader =new Headers();
    this.myHeader.append('Content-Type', "application/json");
    
    return this.http.get('https://randomuser.me/api/?results=10', {headers: this.myHeader});

  }

  getCacheData(){
    
    return JSON.parse(localStorage.getItem('data_object'))['results'];
  }

  saveCacheData(arrayObject) {
    localStorage.setItem('data',arrayObject['results']);
    localStorage.setItem('data_object',JSON.stringify(arrayObject));
    
  }
}
