import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getTasks(){
    return this._http.get('/task');
  }

  createTask(task){
    return this._http.post('/task', task);
  }

  findOne(_id){
    return this._http.get(`/task/${_id}`);
  }

  endTask(_id, task){
    return this._http.put(`/task/${_id}`, task);
  }

  delete(_id){
    return this._http.delete(`/task/${_id}`);
  }

}
