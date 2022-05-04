import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MyHttpService} from './services/my-http.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }