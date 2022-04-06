import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  constructor(private diaglogRef: MatDialog) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log("Form submitted", form.value)
    /*
    TODO: when submitted, form object gets passed on the console. So maybe in onSubmit() trigger
    another function that will take in the address and create a marker in maps component.
    Probably something to do with two way binding?

    Or maybe everytime user submits the form, store data in a database using MySQL, 
    then create array in mapComponent of addresses, 
    then loop through addresses to add markers.
    */
  }

  closeDialog() {
    this.diaglogRef.closeAll();
  }

}
