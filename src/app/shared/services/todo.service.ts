import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // todos: Todo[] = [];
  todos: Todo[] = [
    new Todo('First Todo'),
    new Todo('Test Todo'),
    new Todo('Test Todo22'),
  ];
  constructor() {}

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find((t) => t.id === id);
  }

  addTodo(todo: Todo) {
    return this.todos.push(todo);
  }

  editTodo(id: string, updatedFields: Partial<Todo>) {
    const todo = this.getTodo(id);
    Object.assign(todo, updatedFields);
  }

  deleteTodo(id: string) {
    const todoIndex = this.todos.findIndex((t) => t.id === id);
    if (todoIndex !== -1) this.todos.splice(todoIndex, 1);
  }
}
