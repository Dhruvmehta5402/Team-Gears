import { style } from "@angular/animations";
import { Component, OnInit, ViewChild } from '@angular/core'
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { EventPin } from "./event.model";
import { Subscription } from "rxjs";
import { InteractionService } from "../interaction.service";
import { GetlatlngService } from '../getlatlng.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow

  //pushEventPinSubscription:Subscription;

  constructor(private interactiveService:InteractionService, private getLatLng: GetlatlngService) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
    })
    this.interactiveService.getPushEventPin().subscribe(eventPin=>{
      this.getLatLng.getLatLng(eventPin.address).subscribe(data => {
        console.log("in getLatLng",eventPin.address, data.results[0].geometry.location.lat, data.results[0].geometry.location.lng,eventPin.title, eventPin.eventDetails, eventPin.otherInformation);
        eventPin.position.lat=data.results[0].geometry.location.lat
        eventPin.position.lng=data.results[0].geometry.location.lng
        this.addMarker(eventPin);
      })
    })
  }

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
  currMarker!:any
  title:string  = ''
  address:string = ''
  eventDetails:string = ''
  otherInformation:string = ''

  click(event: google.maps.MapMouseEvent) {
    console.log(event)

    var pin:EventPin = {
      address: "Customaddress",
      position: {
        lat: event.latLng?.lat() || 0,
        lng: event.latLng?.lng() || 0,
      },
      title: "Title",
      //uncomment these
      eventDetails:"blahblah",
      otherInformation:"covidinfomaybe",
    }

    this.addMarker(pin)
  }

  addMarker(pin:EventPin) {
    console.log("add marker", pin.position.lat, pin.position.lng)
    this.markers.push({
      lat: pin.position.lat,
      lng: pin.position.lng,
      position: {
        lat: pin.position.lat,
        lng: pin.position.lng,
      },
      // label: {
      //   color: 'red',
      //   text: 'Marker label(on marker)' + (this.markers.length + 1),
      // },
      title: pin.title,
      options: {
        animation: google.maps.Animation.DROP,
      },
      //Uncomment these
      address: pin.address,
      eventDetails: pin.eventDetails,
      otherInformation: pin.otherInformation
    })
  }

  openInfo(mapMarker:MapMarker, marker:any) {
    // console.log("CLICKED MARKER")
    // this.title = marker.info
    // this.info = marker.info
    this.otherInformation = marker.otherInformation
    this.address = marker.address
    this.eventDetails = marker.eventDetails
    this.title = marker.title
    //this.address = marker.address
    //this.eventDetails = marker.info
    //this.otherInformation = marker.info

    this.infoWindow.open(mapMarker)
  }

  //get addresses from the database to make ana array of addresses
  //and in the html file loop through the array to put in many markers
}
