import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Note } from '../models/note.model';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [];
  notesKey = 'notes';
  constructor(private localStorageService: LocalstorageService) {
    this.localStorageService.getItemState(this.notes, this.notesKey);

    fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
      if (event.key === this.notesKey)
        this.localStorageService.getItemState(this.notes, this.notesKey);
    });
  }

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    return this.notes.find((n) => n.id === id);
  }

  addNote(note: Note) {
    this.notes.push(note);

    this.localStorageService.saveItemState(this.notesKey, this.notes);
  }

  editNote(id: string, updateFields: Partial<Note>) {
    const note = this.getNote(id);
    Object.assign(note, updateFields);

    this.localStorageService.saveItemState(this.notesKey, this.notes);
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex((n) => n.id === id);
    if (noteIndex === -1) return;
    this.notes.splice(noteIndex, 1);

    this.localStorageService.saveItemState(this.notesKey, this.notes);
  }
}
