import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog } from '@angular/material/dialog';
import { InteractionService } from '../interaction.service';
import { EventPin } from '../Map/event.model';
import { GetlatlngService } from '../getlatlng.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})


export class AddLocationComponent implements OnInit {

  constructor(private diaglogRef: MatDialog, private interactiveService: InteractionService, private getLatLng: GetlatlngService) {}

  private latitude:string = "";
  private longitude:string = "";
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log("Form submitted", form.value)
    this.getLatLng.getLatLng(form.value.address).subscribe(data => {
      console.log("in getLatLng",data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
      this.PushPin(form.value.address, data.results[0].geometry.location.lat, data.results[0].geometry.location.lng,form.value.event_name, form.value.purpose, form.value.other_info);
    })
  }

  PushPin(addr: string, lati:string, long:string, titl:string, eventDe:string, otherInfo:string) {
    var pin:EventPin = {
      address: addr,
      position: {
        lat: +lati|| 0,
        lng: +long|| 0,
      },
      title: titl,
      eventDetails:eventDe,
      otherInformation: otherInfo,
    }
    this.interactiveService.sendPushEventPin(pin);
  }

  closeDialog() {
    this.diaglogRef.closeAll();
  }

}