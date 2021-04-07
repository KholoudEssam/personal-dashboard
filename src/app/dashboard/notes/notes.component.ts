import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/models/note.model';
import { NoteService } from 'src/app/shared/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  constructor(private noteSevice: NoteService) {}

  ngOnInit(): void {
    this.notes = this.noteSevice.getNotes();
  }
}
