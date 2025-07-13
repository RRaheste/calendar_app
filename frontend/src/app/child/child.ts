import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrls: ['./child.css']
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  @Input() childMessage!: string;

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit('Hello from child')
  }
}
