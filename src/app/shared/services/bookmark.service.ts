import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Bookmark } from '../models/bookmark.model';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmarks: Bookmark[] = [];
  bookmarkKey = 'bookmarks';
  constructor(private localStorageService: LocalstorageService) {
    this.localStorageService.getItemState(this.bookmarks, this.bookmarkKey);

    fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
      console.log(this.bookmarks);
      if (event.key === this.bookmarkKey)
        this.localStorageService.getItemState(this.bookmarks, this.bookmarkKey);
    });
  }

  getBookmarks() {
    return this.bookmarks;
  }

  getBookmark(id: string) {
    return this.bookmarks.find((n) => n.id === id);
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
    this.localStorageService.saveItemState(this.bookmarkKey, this.bookmarks);
  }

  editBookmark(id: string, updateFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id);
    Object.assign(bookmark, updateFields);
    this.localStorageService.saveItemState(this.bookmarkKey, this.bookmarks);
  }

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookmarks.findIndex((n) => n.id === id);
    if (bookmarkIndex === -1) return;
    this.bookmarks.splice(bookmarkIndex, 1);
    this.localStorageService.saveItemState(this.bookmarkKey, this.bookmarks);
  }
}
