import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkBoxComponent } from './dashboard/bookmarks/bookmark-box/bookmark-box.component';
import { BookmarksComponent } from './dashboard/bookmarks/bookmarks.component';
import { NoteBoxComponent } from './dashboard/notes/note-box/note-box.component';
import { NotesComponent } from './dashboard/notes/notes.component';
import { TodoBoxComponent } from './dashboard/todos/todo-box/todo-box.component';
import { TodosComponent } from './dashboard/todos/todos.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'bookmarks/add', component: BookmarkBoxComponent },
  { path: 'bookmarks/edit/:id', component: BookmarkBoxComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todos/add', component: TodoBoxComponent },
  { path: 'todos/edit/:id', component: TodoBoxComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'notes/add', component: NoteBoxComponent },
  { path: 'notes/edit/:id', component: NoteBoxComponent },
  { path: '', component: BookmarksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
