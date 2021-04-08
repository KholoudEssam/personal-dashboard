import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
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
import { NoteBoxComponent } from './dashboard/notes/note-box/note-box.component';
import { TodoBoxComponent } from './dashboard/todos/todo-box/todo-box.component';
import { BookmarkBoxComponent } from './dashboard/bookmarks/bookmark-box/bookmark-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    TodoComponent,
    NoteComponent,
    NoteBoxComponent,
    TodoBoxComponent,
    BookmarkBoxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
