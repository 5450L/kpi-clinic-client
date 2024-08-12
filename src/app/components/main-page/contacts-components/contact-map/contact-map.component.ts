import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'contact-map',
  standalone: true,
  imports: [],
  templateUrl: './contact-map.component.html',
  styleUrl: './contact-map.component.css'
})
export class ContactMapComponent implements OnInit {
  private map: L.Map | undefined;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [50.005983900257036, 36.24955296536345], // Latitude and Longitude for Google's HQ
      zoom: 15
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([50.005983900257036, 36.24955296536345]).addTo(this.map) // Marker at Google's HQ
  }
}
