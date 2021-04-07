import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksComponent } from './dashboard/bookmarks/bookmarks.component';
import { NoteBoxComponent } from './dashboard/notes/note-box/note-box.component';
import { NotesComponent } from './dashboard/notes/notes.component';
import { TodosComponent } from './dashboard/todos/todos.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'todos', component: TodosComponent },
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
