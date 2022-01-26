import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(this.onRouteChanged);
  }

  onRouteChanged(event) {
    if (event instanceof NavigationEnd || event instanceof NavigationStart) {
      let levelRoute = event.url.match(/\//g).length;

      if (levelRoute == 1) {
        window.scrollTo(0, 0);
      }
    }
  }
}
