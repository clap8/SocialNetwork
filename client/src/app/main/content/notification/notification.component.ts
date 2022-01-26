import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent implements OnInit {
  public rows = [
    { description: 'In a world where magic is all but forgotten, the people are on the verge of a revolt against their tyrannical monarchy. A class system divides the poor from the rich, but a spark of magic may tip the scales of society.:bulletblue: The Kickstarter :bulletblue:Most of you have followed ', community: '#brive-jpop', datetime: '10/12/18 à 12:00', read: false },
    { description: '<a href="#">Austin</a> à commenter votre billet <a href="#">Concert prévu à Paris</a>', community: '#brive-jpop', datetime: '10/12/18 à 12:00', read: false },
    { description: '<a href="#">Austin</a> à commenter l\'évènement <a href="#">Concert prévu à Paris</a>', community: '#brive-jpop', datetime: '10/12/18 à 12:00', read: true },
  ];

  public communities = [
    '#brive-jpop',
    '#tulle-cuisine',
    '#lab19'
  ];

  public notificationTypes = [
    'Toutes les notifications',
    'Tous les postes',
    'Tous les evènements',
    'Globales'
  ];

  public selectedRows = [];
  public selectedCommunity;
  public selectedNotificationType = 'Toutes les notifications';

  constructor() { }

  ngOnInit() {}

  onSelect({ selected }) {
    console.log('Select Event', selected);
  }

  getRowClass(row) {
    return {
      'not-read': (row.read === false)
    };
  }
}
