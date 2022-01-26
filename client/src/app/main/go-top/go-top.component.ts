import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.scss']
})
export class GoTopComponent implements OnInit {
  public visible:Boolean = false;

  @HostListener("window:scroll", ['$event.target'])
  onWindowScroll(target) {
    let doc = target.documentElement;
    if (doc.scrollTop >= window.innerHeight) {
      this.visible = true;
    }
    else {
      this.visible = false;
    }
  }

  constructor() { }

  ngOnInit() {}

  goTop() {
    window.scroll(0, 0);
  }
}
