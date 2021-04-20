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
  bgImg =
    'https://images.unsplash.com/photo-1615569082599-865be05af048?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920';
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
    const newBg = await fetch('https://source.unsplash.com/random/1920x1080', {
      method: 'HEAD',
    });

    if (newBg.url === this.bgImg) return this.changeBg();
    this.bgImg = newBg.url;
  }
  imageLoaded() {
    this.imgLoaded = true;
  }
}
