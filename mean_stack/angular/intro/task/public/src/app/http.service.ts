import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){
    // this.getTaskByID("5b6bbf079745b16fe4677f1d");
    // this.getPokemon();
  }
  getTasks(){
    // our http response is an Observable, store it in a variable
    return this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  getTaskByID(id: string){
    return this._http.get('/tasks/'+id);
  }

  addTask(newtask){
    return this._http.post('/tasks', newtask)
  }

  deleteTaskByID(id: string) {
    return this._http.delete('/tasks/'+id);
  }

  updateTaskByID(id: string, newtask) {
    return this._http.put('/tasks/'+id, newtask);
  }

  // getPokemon() {
  //   let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  //   bulbasaur.subscribe(data => console.log("Got our Pokemon!", data));
  //   bulbasaur.subscribe(data => console.log("Bulbasaur's abilities are " + data["abilities"][0]["ability"]["name"] + " and " + data["abilities"][1]["ability"]["name"]));
  //   bulbasaur.subscribe(data => {
  //     let url = data["abilities"][0]["ability"]["url"];
  //     let chlorophyll = this._http.get(url);
  //     chlorophyll.subscribe(data => console.log(data["pokemon"].length + " Pokemon have the overgrow ability."));
  //     chlorophyll.subscribe(data => {
  //       var pokemon = data["pokemon"];
  //       console.log(pokemon);
  //       for (var i = 0; i < pokemon.length; i++) {
  //         console.log(pokemon[i]["pokemon"]['name'] + " knows " + data["name"]);
  //       }
  //     });
  //   })
  // }
}