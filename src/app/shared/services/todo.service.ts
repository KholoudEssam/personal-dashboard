import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { Todo } from '../models/todo.model';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  todoKey = 'todos';
  constructor(private localStorageService: LocalstorageService) {
    this.localStorageService.getItemState(this.todos, this.todoKey);

    fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
      if (event.key === this.todoKey)
        this.localStorageService.getItemState(this.todos, this.todoKey);
    });
  }

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find((t) => t.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);

    this.localStorageService.saveItemState(this.todoKey, this.todos);
  }

  editTodo(id: string, updatedFields: Partial<Todo>) {
    const todo = this.getTodo(id);
    Object.assign(todo, updatedFields);
    this.localStorageService.saveItemState(this.todoKey, this.todos);
  }

  deleteTodo(id: string) {
    const todoIndex = this.todos.findIndex((t) => t.id === id);
    if (todoIndex !== -1) {
      this.todos.splice(todoIndex, 1);
      this.localStorageService.saveItemState(this.todoKey, this.todos);
    }
  }

  // updateTodosState() {
  //   const todosInStorage =
  //     this.localStorageService.getItemState(this.todoKey) || [];
  //   //To Not Mutate the state
  //   this.todos.length = 0;
  //   this.todos.push(...todosInStorage);
  // }
}
