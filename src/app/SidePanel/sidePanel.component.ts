import { style } from "@angular/animations";
import { Component } from "@angular/core";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddLocationComponent } from "../add-location/add-location.component";

@Component({
  selector: 'app-side-panel',
  templateUrl: './sidePanel.component.html',
  styleUrls: ['./sidePanel.component.css']
})

export class SidePanelComponent {
  // showFiller = false;

  constructor(private diaglogRef: MatDialog) {}

  openDialog() {
    this.diaglogRef.open(AddLocationComponent);
  }
}
