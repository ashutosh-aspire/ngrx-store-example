import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToDos } from '../models/todos';
@Component({
  selector: 'app-create-todos',
  templateUrl: './create-todos.component.html',
  styleUrls: ['./create-todos.component.css']
})
export class CreateTodosComponent implements OnInit {
  constructor(private store: Store<ToDos[]>) { }
  ngOnInit() {
  }
  saveTodo(todo) {
    this.store.dispatch({
      type: 'Todos_Create',
      payload: {
        id: 'todo_' + this.makeid(),
        todo: todo
      }
    });
  }
  makeid = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}
