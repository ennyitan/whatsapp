import { Component } from '@angular/core';
import { MyHttpService } from './services/my-http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ng-library';

  public contacts: any;

  public messages: string[] = [];

  public activeChat: any = {
    username: '',
    avatar: ''
  }

  setActiveChat(avatar: any, username: any) {
    this.activeChat.username =  username;
    this.activeChat.avatar = avatar;
  }

  newMessage = new FormGroup({
    message: new FormControl()
  })

  sendMessage(e: any) {
    e.preventDefault()
    this.messages.push(this.newMessage.value.message)
    this.newMessage.reset()
  }

  public todayDate = new Date();

  constructor(public _MyHttpService: MyHttpService) { }

  ngOnInit(): void {
    this._MyHttpService.fetchData().subscribe(
      (response: any) => {
        console.log(response[0])
        this.contacts = response;
        this.activeChat.username = response[0].name
        this.activeChat.avatar = response[0].image.medium
      },
      (error) => {console.log(error);})
  }
}
