import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { EventPin } from "./event.model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {
  eventPins = {}

  mapOptions: google.maps.MapOptions = {
    center: { lat: 40.10921097408571, lng: -88.22723153914798 },
    zoom : 16,
    disableDefaultUI: true,
  }
  marker = {
    position: { lat: 40.10921097408571, lng: -88.22723153914798 },
  }
}
