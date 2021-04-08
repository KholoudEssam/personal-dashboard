import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/shared/models/note.model';
import { NoteService } from 'src/app/shared/services/note.service';

@Component({
  selector: 'app-note-box',
  templateUrl: './note-box.component.html',
  styleUrls: ['./note-box.component.scss'],
})
export class NoteBoxComponent implements OnInit {
  constructor(
    private noteService: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  editMode = false;
  note: Note = { id: '', title: '', content: '' };

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      if (id === undefined) return;
      else {
        this.editMode = true;
        this.note = this.noteService.getNote(id);
      }
    });
  }

  onSubmitForm(f: NgForm) {
    if (f.invalid) return;

    const { title, content } = f.value;

    if (this.editMode) {
      this.noteService.editNote(this.note.id, { title, content });
    } else {
      const note = new Note(title, content);
      this.noteService.addNote(note);
    }

    this.router.navigate(['/notes']);
  }

  onDeleteNote(id) {
    this.noteService.deleteNote(id);
    this.router.navigate(['/notes']);
  }
}
