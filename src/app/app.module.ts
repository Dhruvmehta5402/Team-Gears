import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog';

import { GoogleMapsModule } from '@angular/google-maps'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidePanelComponent } from './SidePanel/sidePanel.component';
import { MapComponent } from './Map/map.component';
import { SearchBarComponent } from './SearchBar/searchBar.component';
import { AddLocationComponent } from './add-location/add-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidePanelComponent,
    MapComponent,
    SearchBarComponent,
    AddLocationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatFormFieldModule,
    HttpClientModule,
    GoogleMapsModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
