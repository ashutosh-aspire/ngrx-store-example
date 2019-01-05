import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ToDos } from '../models/todos';
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos: Observable<ToDos[]>;
  constructor(private store: Store<ToDos[]>) {
    this.todos = store.select('todos');
  }
  ngOnInit() {
  }
  removeTodo(id) {
    this.store.dispatch({
      type: 'Todos_Delete',
      id: id
    });
  }
}
