import { Component, OnInit } from "@angular/core";
import { Message, ChatService } from "../chat.service";
@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  value: string;

  constructor(public chatService: ChatService) {}

  ngOnInit() {
    this.chatService.conversation.subscribe(val => {
      this.messages = this.messages.concat(val);
      setTimeout(() => {
        this.updateScroll(), 500;
      });
    });
  }

  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = "";
  }

  updateScroll() {
    try {
      var element = document.getElementById("messages-area");
      console.log("scroll", element.scrollHeight);
      console.log("scroll init", element.scrollTop);
      element.scrollTop = element.scrollHeight;
      console.log("scroll end", element.scrollTop);
    } catch (error) {
      console.log("error", error);
    }
  }
}
