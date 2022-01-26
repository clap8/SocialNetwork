import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-search',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '*'
      })),
      state('out', style({
        opacity: '0',
        height: '0px',
        overflow: 'hidden',
        margin: '0px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class CommunityListComponent implements OnInit {
  searchMenuOpen: string = 'out';

  public themes = [
    'Cuisine',
    'Informatique',
    'Danse',
    'Soirée'
  ];

  public geoZones = [
    'Autour de moi',
    'Limousin',
    'Région voisines',
    'Toute la France'
  ];

  public cities = [
    'Brive-la-gaillarde (19100)',
    'Terrasson (24120)',
    'Sarlat-la-canneda',
    'Larche'
  ];

  public radius = [
    '30 km',
    '50 km',
    '100 km'
  ];

  public selectedCity;
  public selectedRadius = '30 km';

  public myOptions: NgxMasonryOptions = {
    percentPosition: true
  };

  masonryItems = [
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' },
    { title: 'item 4' },
    { title: 'item 5' },
    { title: 'item 6' }
  ];

  constructor() { }

  ngOnInit() {}

  toggleSearchMenu(): void {
    this.searchMenuOpen = this.searchMenuOpen === 'out' ? 'in' : 'out';
  }
}
