import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'MEAN Stack';
  tasks: any;
  task: object;
  // thirdTask: string;
  // num: number;
  // randNum: number;
  // str: string;
  // first_name: string;
  // snacks: string[];
  // loggedIn: boolean;

  newTask: any;
  editTask: any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    // this.num = 7;
    // this.randNum = Math.floor( (Math.random()  * 2 ) + 1);
    // this.str = 'Hello Angular Developer!';
    // this.first_name = 'Alpha';
    // this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    // this.loggedIn = true;
    // this.getTasksFromService();
    this.getAllTasks();
    this.newTask = { title: "", description: "", completed: "false"}
    this.editTask = { title: "", description: "", completed: "false"}
  }

  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    // ...
    // Reset this.newTask to a new, clean object.
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Posted our tasks!", data)
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
      // This may be different for you, depending on how you set up your Task API.
      this.getAllTasks()
      // if (this.tasks.length > 2) {
      //   this.thirdTask = this.tasks[2];
      // }
      console.log(this.tasks);
    });
    this.newTask = { title: "", description: "", completed: "false" }
  }

  editOnSubmit() {
    console.log(this.task);
    let observable = this._httpService.updateTaskByID(this.task["_id"], this.task)
    observable.subscribe(data => {
      console.log("Updated our tasks!", data)
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
      // This may be different for you, depending on how you set up your Task API.
      this.getAllTasks()
      // if (this.tasks.length > 2) {
      //   this.thirdTask = this.tasks[2];
      // }
      console.log(this.tasks);
    });
  }

  deleteTaskByID(id) {
    let observable = this._httpService.deleteTaskByID(id);
    observable.subscribe(data => {
      console.log("Delete our task!", data)
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
      // This may be different for you, depending on how you set up your Task API.
      this.getAllTasks()
    });
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
      // This may be different for you, depending on how you set up your Task API.
      this.tasks = data;
      // if (this.tasks.length > 2) {
      //   this.thirdTask = this.tasks[2];
      // }
      console.log(this.tasks);
   });
  }

  getTaskByIDFromService(id: string) {
    // our http response is an Observable, store it in a variable
    let observable = this._httpService.getTaskByID(id);
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    observable.subscribe(data => {
      console.log("Got our task!", data);
      this.task = data;
      console.log(this.task);
    })
  }

  getAllTasks(): void { 
    this.getTasksFromService();
  }
  getTask(id: string): void {
    this.getTaskByIDFromService(id);
  }
  // onButtonClickParam(num: Number): void { 
  //     console.log(`Click event is working with num param: ${num}`);
  // }
  // onButtonClickParams(num: Number, str: String): void { 
  //     console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  // }
  // onButtonClickEvent(event: any): void { 
  //     console.log(`Click event is working with event: ${event}`);
  // }
}
