import { Injectable } from '@angular/core';
import { Bookmark } from '../models/bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmarks: Bookmark[] = [
    new Bookmark('wkipedia', 'https://wikipedia.com'),
    new Bookmark('Google', 'https://google.com'),
    new Bookmark('YouTube', 'https://youtube.com'),
  ];

  constructor() {}

  getBookmarks() {
    return this.bookmarks;
  }

  getBookmark(id: string) {
    return this.bookmarks.find((n) => n.id === id);
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
  }

  editBookmark(id: string, updateFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id);
    Object.assign(bookmark, updateFields);
  }

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookmarks.findIndex((n) => n.id === id);
    if (bookmarkIndex === -1) return;
    this.bookmarks.splice(bookmarkIndex, 1);
  }
}
