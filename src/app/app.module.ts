import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
// import { DirectivetestComponent } from './directivetest/directivetest.component';
import { Directive2Component } from './directive2/directive2.component';
import { DirectivetestComponent } from './directivetest/directivetest.component';
import { CommunicationComponent } from './communication/communication.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { CounterComponent } from './viewchild/counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DirectivetestComponent,
    Directive2Component,
    CommunicationComponent,
    ViewchildComponent,
    CounterComponent,
    
  ],
//declaration array contians all the components used by application

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
