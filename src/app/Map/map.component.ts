import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { EventPin } from "./event.model";
import { ViewChild } from '@angular/core'
import { GoogleMap } from "@angular/google-maps";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  // @ViewChild(GoogleMap, { static: false }) map!: GoogleMap

  mapOptions: google.maps.MapOptions = {
    center: { lat: 40.10921097408571, lng: -88.22723153914798 },
    zoom : 16,
    disableDefaultUI: true,
    // mapTypeId: 'hybrid',
    // zoomControl: false,
    // scrollwheel: false,
    // disableDoubleClickZoom: true,
  }

  markerabc = {
    position: { lat: 40.10921097408571, lng: -88.22723153914798 },
  }

  pin:EventPin = {
    name: "hi",
    address: "hi",
    position: {
      lat: 7,
      lng: 7,
    },
    purpose: "hi"
  }

  markers:any[] = []

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
    })
  }

  click(event: google.maps.MapMouseEvent) {
    console.log(event)
    this.addMarker(this.pin)
  }

  addMarker(pin:EventPin) {
    console.log("add marker")
    this.markers.push({
      position: {
        lat: this.markerabc.position.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.markerabc.position.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        // animation: google.maps.Animation.BOUNCE,
      },
    })
  }
}
