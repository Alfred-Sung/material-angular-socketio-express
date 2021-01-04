import {Component, OnDestroy, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ChatService} from './chat.service'
import { Observable } from 'rxjs';

import { ThemeService } from './theme.service';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('scroll') private myScrollContainer!: ElementRef;

  title = 'instant-chatting';

  room!: String;
  user = "Guest";
  isDarkTheme!: Observable<boolean>;

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.join();
  }

  ngOnDestroy() {
    this.leave();
  }

  messageText!: String;
  messageArray: Array<{user: String , message: String }> = [];
  constructor(private chatService: ChatService, private themeService: ThemeService, private accountService: AccountService) {
    this.chatService.newUserJoined()
      .subscribe(data => this.messageArray.push(data));

    this.chatService.userLeftRoom()
      .subscribe(data => this.messageArray.push(data));

    this.chatService.newMessageReceived()
      .subscribe(data => this.messageArray.push(data));

    this.accountService.username.subscribe({
      next: (v) => this.user = v
    });
  }

  join(){
      this.chatService.joinRoom({user: this.user, room: this.room});
  }

  leave(){
    this.chatService.leaveRoom({user: this.user, room: this.room});
  }

  sendMessage()
  {
    if (this.messageText) {
      this.chatService.sendMessage({user: this.user, room: this.room, message: this.messageText});
      this.messageText = '';
    }
  }
}