import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'better tasks';
  tasks = [];
  completedTasks = [];
  todoTasks = [];
  newTask = {isCompleted: false};
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasks();
    setInterval( () => {this.updateTime()}, 1000);
  }

  readableTime(s){
    let d = s / 86400 >> 0;
    s %= 86400;
    let h = s / 3600 >> 0;
    s %= 3600;
    let m = s / 60 >> 0;
    s %= 60;
    return `${d} d, ${h} h, ${m} m, ${s} s`;
  }

  updateTime(){
    for(let t in this.todoTasks){
      let now = new Date().getTime();
      let start = new Date(this.todoTasks[t].createdAt).getTime();
      this.todoTasks[t]['duration'] = this.readableTime((now - start)/1000 >> 0);
    }
  }

  getTasks(){
    this.completedTasks = [];
    this.todoTasks = [];
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data['tasks'];
      for(let task of this.tasks){
        if(task.isCompleted){
          this.completedTasks.push(task);
        }else{
          this.todoTasks.push(task);
        }
      }
      this.calculateTotal();
    });
  }

  onSubmit(){
    // console.log('you are submitting a thing!!!');
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log(data);
      this.getTasks();
      this.newTask = {isCompleted: false};
    });
  }

  endTask(_id){
    let observable1 = this._httpService.findOne(_id);
    observable1.subscribe(data => {
      let task = data['task'];
      task.isCompleted = true;
      task.updatedAt = new Date();
      let observable2 = this._httpService.endTask(_id, task);
      observable2.subscribe(data => {
        console.log(data);
        this.getTasks();
        this.calculateTotal();
      });
    });
  }

  deleteTask(_id){
    let observable = this._httpService.delete(_id);
    observable.subscribe(data => {
      console.log(data);
      this.getTasks();
    });
  }

  calculateTotal(){
    console.log("we are calculating", this.completedTasks.length);
    for(let t in this.completedTasks){
      let u = new Date(this.completedTasks[t].updatedAt).getTime() / 1000 >> 0;
      let c = new Date(this.completedTasks[t].createdAt).getTime() / 1000 >> 0;
      this.completedTasks[t]['duration'] = this.readableTime((u-c));
      console.log(u, c);
    }
  }


}
