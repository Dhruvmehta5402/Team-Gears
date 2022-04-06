import { style } from "@angular/animations";
import { Component, OnInit, ViewChild } from '@angular/core'
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { EventPin } from "./event.model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow

  mapOptions: google.maps.MapOptions = {
    center: { lat: 40.10921097408571, lng: -88.22723153914798 },
    zoom : 16,
    disableDefaultUI: true,
    // mapTypeId: 'hybrid',
    // zoomControl: false,
    // scrollwheel: false,
    // disableDoubleClickZoom: true,
  }

  // pin:EventPin = {
  //   address: "address",
  //   position: {
  //     lat: 40.10921097408571,
  //     lng: -88.22723153914798,
  //   },
  //   title: "title",
  //   info: "info",
  // }

  markers:any[] = []

  infoContent:string = ''

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
    })
  }

  click(event: google.maps.MapMouseEvent) {
    console.log(event)

    var pin:EventPin = {
      address: "address",
      position: {
        lat: event.latLng?.lat() || 0,
        lng: event.latLng?.lng() || 0,
      },
      title: "title",
      info: "info",
    }

    this.addMarker(pin)
  }

  addMarker(pin:EventPin) {
    console.log("add marker")
    this.markers.push({
      position: {
        lat: pin.position.lat,
        lng: pin.position.lng,
      },
      label: {
        color: 'red',
        text: 'Marker label(on marker)' + (this.markers.length + 1),
      },
      title: 'Marker title(mouseover)' + (this.markers.length + 1),
      // info: 'Marker info(click)' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
      },
    })
  }

  openInfo(marker: MapMarker, content: string) {
    console.log("CLICKED MARKER")
    this.infoContent = content
    this.infoWindow.open(marker)
  }
}
