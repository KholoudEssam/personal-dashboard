import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/shared/models/note.model';
import { NoteService } from 'src/app/shared/services/note.service';

@Component({
  selector: 'app-note-box',
  templateUrl: './note-box.component.html',
  styleUrls: ['./note-box.component.scss'],
})
export class NoteBoxComponent implements OnInit {
  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {}

  addNoteForm(f: NgForm) {
    console.log('clicked');
    if (f.invalid) return;
    const note = new Note(f.value.title, f.value.content);
    this.noteService.addNote(note);
    this.router.navigate(['/notes']);
  }
}
