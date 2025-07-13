import { Component, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class ParentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  recieveMessage(msg: string) {
    alert(msg);
  }
}
