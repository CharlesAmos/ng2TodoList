import { Component } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { CreatetaskComponent } from './createtask/createtask.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todo-List';
  constructor(public create:CreatetaskComponent){
    this.create = create;
  }
  viewtasks(){
    this.create.viewtasks();
  }
}
