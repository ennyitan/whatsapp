import { Component, OnInit, Injectable } from '@angular/core';
import { MyHttpService } from '../services/my-http.service';

@Injectable()

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  public messages: any;

  constructor(public _MyHttpService: MyHttpService) { }

  ngOnInit(): void {
    this._MyHttpService.fetchData().subscribe(
      (response) => {this.messages = response;},
      (error) => {console.log(error);})
  }
}
