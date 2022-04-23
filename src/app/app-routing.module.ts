import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidePanelComponent } from './SidePanel/sidePanel.component';

const routes: Routes = [
  { path: 'map', component: SidePanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }