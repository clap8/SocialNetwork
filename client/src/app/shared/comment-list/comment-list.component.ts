import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommentListComponent implements OnInit {
  @Input() bordered:boolean = true;

  constructor() { }

  ngOnInit() {}
}
