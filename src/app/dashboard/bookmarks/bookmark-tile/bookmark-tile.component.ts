import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/shared/models/bookmark.model';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss'],
})
export class BookmarkTileComponent implements OnInit {
  @Input() bookmark: Bookmark;
  tileImg: string;
  faviconErr = false;
  constructor() {}

  ngOnInit(): void {
    this.tileImg = `${this.bookmark.url.origin}/favicon.ico`;
  }
}
