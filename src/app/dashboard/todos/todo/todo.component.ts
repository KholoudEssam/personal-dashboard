import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  toggleCompleted(t: Todo) {
    this.todoService.editTodo(t.id, { completed: !t.completed });
    this.ngOnChanges();
  }

  onDeleteTodo(id: string) {
    this.todoService.deleteTodo(id);
  }
}
