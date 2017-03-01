import { Component, OnInit, Input } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {

  @Input() item;
public y = true;
  task = [];
  constructor() { }

  ngOnInit() {

  }
// to view task
viewtasks(){ 
  this.task = this.task;
  this.y = false;
  //console.log(this.y);
}

// to add new task
addtask(newtitle, newdescription){
if(newtitle!=null && newdescription!=null){
    var entry = {title:newtitle, description:newdescription};
    this.task.push(entry);

    for(var i=0; i<this.task.length; i++){
    //console.log(this.task[i].title + " " + this.task[i].description);

    }
}
}
// to delete task
deleteTask(taskX) {
  console.log(taskX);
  let index = this.task.findIndex(task => task.title === taskX.title );
  console.log(index);
  this.task.splice(index, 1);
}

}


