import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // setTimeout(function() {
    //   let viewheight = window.visualViewport.height;
    //   let viewwidth = window.visualViewport.width;
    //   let viewport = document.querySelector("meta[name=viewport]");
    //   viewport.setAttribute(
    //     "content",
    //     "height=" +
    //       viewheight +
    //       "px, width=" +
    //       viewwidth +
    //       "px, initial-scale=1.0"
    //   );
    // }, 300);
  }
  // links = [
  //   {path:'/main',label:'main',active:'button-active'},
  //   {path:'/chat',label:'chat',active:'button-active'}
  // ]
}
