import { Component, OnInit, OnDestroy } from "@angular/core";
import { ParentComponent } from "./parent/parent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ParentComponent],
})
export class AppComponents implements OnInit {
  title = "Hello World!"
  intervalSub: number | undefined;

  getMin(a: number, b: number) {
    if (a < b) {
      return a;
    }
    return b;
  }

  ngOnInit() {
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit');
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }
}