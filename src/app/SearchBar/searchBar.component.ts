import { style } from "@angular/animations";
import { NgForm } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: 'app-search-bar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.css'],
})

export class SearchBarComponent {
  search : String ="";

  onSearch(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }
}
