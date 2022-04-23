import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog } from '@angular/material/dialog';
import { InteractionService } from '../interaction.service';
import { EventPin } from '../Map/event.model';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})


export class AddLocationComponent implements OnInit {

  constructor(private diaglogRef: MatDialog, private interactiveService: InteractionService) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log("Form submitted", form.value.address, form.value.event_name,form.value.purpose,form.value.other_info)
    var pin:EventPin = {
      address: form.value.address,
      position: {
        lat: 0,
        lng: 0,
      },
      title: form.value.event_name,
      eventDetails:form.value.purpose,
      otherInformation: form.value.other_info,
    }
    this.interactiveService.sendPushEventPin(pin);
  }


  closeDialog() {
    this.diaglogRef.closeAll();
  }

}