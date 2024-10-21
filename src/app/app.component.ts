import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


export interface TodoItem {
  id:number;
  task:string;
  completed:boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  todoLIst : TodoItem [] = [];
  newTask:string =''

  addTask():void {
      if(this.newTask.trim() !== ''){
        const newTodoItem : TodoItem  = {
          id : Date.now(),
          task: this.newTask,
          completed:false
        }


        this.todoLIst.push(newTodoItem)
        this.newTask = '';
      }
  }


  toggleompleted(index:number):void {
    this.todoLIst[index].completed = !this.todoLIst[index].completed

  }

  deleteTask(id:number):void {
    this.todoLIst = this.todoLIst.filter(item => item.id !== id)
    
  }
}
