import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { LeafnodedetailsComponent } from './leafnodedetails/leafnodedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    LeafnodedetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
