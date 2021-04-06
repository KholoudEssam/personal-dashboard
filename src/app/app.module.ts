import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './dashboard/bookmarks/bookmarks.component';
import { TodosComponent } from './dashboard/todos/todos.component';
import { NotesComponent } from './dashboard/notes/notes.component';
import { BookmarkTileComponent } from './dashboard/bookmarks/bookmark-tile/bookmark-tile.component';
import { TodoComponent } from './dashboard/todos/todo/todo.component';
import { NoteComponent } from './dashboard/notes/note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    TodoComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
