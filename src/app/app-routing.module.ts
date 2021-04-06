import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksComponent } from './dashboard/bookmarks/bookmarks.component';
import { NotesComponent } from './dashboard/notes/notes.component';
import { TodosComponent } from './dashboard/todos/todos.component';

const routes: Routes = [
  {path:"bookmarks", component:BookmarksComponent},
  {path:"todos", component:TodosComponent},
  {path:"notes", component:NotesComponent},
  {path:"", component:BookmarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
