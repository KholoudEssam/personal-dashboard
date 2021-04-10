import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { BookmarkService } from 'src/app/shared/services/bookmark.service';

@Component({
  selector: 'app-bookmark-box',
  templateUrl: './bookmark-box.component.html',
  styleUrls: ['./bookmark-box.component.scss'],
})
export class BookmarkBoxComponent implements OnInit {
  constructor(
    private bookmarkService: BookmarkService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  editMode = false;
  bookmark: Bookmark = new Bookmark('', 'http://localhost'); //it accepts only valid urls no strings

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      if (id === undefined) {
        this.bookmark.name = '';
        this.bookmark.url = null; // to not shown in template
        return;
      } else {
        this.editMode = true;
        this.bookmark = this.bookmarkService.getBookmark(id);
      }
    });
  }

  onSubmitForm(f: NgForm) {
    if (f.invalid) return;

    const { name, url } = f.value;

    if (this.editMode) {
      this.bookmarkService.editBookmark(this.bookmark.id, { name, url });
      this.router.navigate(['/bookmarks/manage']);
    } else {
      const todo = new Bookmark(name, url);
      this.bookmarkService.addBookmark(todo);
      this.router.navigate(['/bookmarks']);
    }
  }

  onDeleteBookmark(id) {
    this.bookmarkService.deleteBookmark(id);
    this.router.navigate(['/bookmarks/manage']);
  }
}
