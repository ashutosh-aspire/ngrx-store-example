import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/todo.reducer';
import { AppComponent } from './app.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { CreateTodosComponent } from './todos/create-todos/create-todos.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateTodosComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todos: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
