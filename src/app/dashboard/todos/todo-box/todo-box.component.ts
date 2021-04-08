import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-box',
  templateUrl: './todo-box.component.html',
  styleUrls: ['./todo-box.component.scss'],
})
export class TodoBoxComponent implements OnInit {
  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  editMode = false;
  todo: Todo = { id: '', text: '', completed: false };

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      const idParam: string = res.get('id') || '';
    });
    this.route.params.subscribe(({ id }) => {
      if (id === undefined) return;
      else {
        this.editMode = true;
        this.todo = this.todoService.getTodo(id);
      }
    });
  }

  onSubmitForm(f: NgForm) {
    if (f.invalid) return;

    const { text } = f.value;

    if (this.editMode) {
      this.todoService.editTodo(this.todo.id, { text });
    } else {
      const todo = new Todo(text);
      this.todoService.addTodo(todo);
    }

    this.router.navigate(['/todos']);
  }

  onDeleteTodo(id) {
    this.todoService.deleteTodo(id);
    this.router.navigate(['/todos']);
  }
}
