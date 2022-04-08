import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})

export class InfoWindowComponent {
  @Input()
  title:string = ""
  @Input()
  address:string = ""
  @Input()
  eventDetails:string = ""
  @Input()
  otherInformation:string = ""
}
