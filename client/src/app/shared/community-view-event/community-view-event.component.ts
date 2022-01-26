import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import * as L from 'leaflet';

@Component({
  selector: 'app-community-view-event',
  templateUrl: './community-view-event.component.html',
  styleUrls: ['./community-view-event.component.scss']
})
export class CommunityViewEventComponent implements OnInit {
  title: string;
  closeBtnName: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const myfrugalmap = L.map('leaflet-map').setView([50.6311634, 3.0599573], 12);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);
  }
}