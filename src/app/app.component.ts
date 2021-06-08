import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('* => *', [
        style({ overflow: 'hidden' }),
        query(
          ':enter',
          [
            style({
              opacity: 0,
              display: 'block',
              transform: 'translateX(30px)',
            }),
            animate(500),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  bgImg = 'assets/photo-bg.jpg';
  imgLoaded = true;
  dateTime = new Observable<Date>();

  ngOnInit(): void {
    this.dateTime = timer(0, 1000).pipe(map(() => new Date()));
  }

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) return outlet.activatedRoute.snapshot.url;
  }

  async changeBg() {
    this.imgLoaded = false;
    let newBg;
    try {
      newBg = await fetch('https://source.unsplash.com/random/1920x1080', {
        method: 'HEAD',
      });
      if (newBg.url === this.bgImg) return this.changeBg();
      this.bgImg = newBg.url;
    } catch (err) {
      newBg = this.bgImg;
      console.log(err);
    }
  }
  imageLoaded() {
    this.imgLoaded = true;
  }
}
