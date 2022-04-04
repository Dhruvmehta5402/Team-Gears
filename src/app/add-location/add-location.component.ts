import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
<?php
include 'info.php';
?>

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  constructor(private diaglogRef: MatDialog) {}

  ngOnInit(): void {
  }

  onSubmit(login: any) {
    console.log("Form submitted", login)
  }

  closeDialog() {
    this.diaglogRef.closeAll();
  }

}
