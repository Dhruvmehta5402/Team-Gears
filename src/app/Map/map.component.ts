import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {
  mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom : 50,
    disableDefaultUI: true,
  }
  marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
  }
}
