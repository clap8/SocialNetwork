import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-community-card',
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.scss']
})
export class CommunityCardComponent implements OnInit {

  @Input() hasJoined: Boolean = false;
  @Input() hasDescription: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
