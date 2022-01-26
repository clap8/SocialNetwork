import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menu: Array<any> = [
    {
      "name": "Mes communautés",
      "href": "/my-community-list",
      "is_open": false,
      "roles": []
    },
    {
      "name": "Recherche",
      "href": "/community-list",
      "is_open": false,
      "roles": []
    },
    {
      "name": "Spots",
      "href": "/spots",
      "is_open": false,
      "roles": []
    }
  ];
  public actions: Array<any> = [
    {
      "name": "Amies",
      "icon": "star",
      "href": "/friend-list",
      "roles": []
    },
    {
      "name": "Notifications",
      "icon": "notifications",
      "href": "/notification",
      "annotation": "10",
      "roles": []
    },
    {
      "name": "Messages",
      "icon": "message",
      "href": "/about",
      "roles": []
    }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
}
