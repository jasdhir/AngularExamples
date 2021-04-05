import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {
  lastLoggedInTime = new Date(2018, 5, 25);
  constructor() { }

  ngOnInit(): void {
  }
  onShow() {
    alert('Show button clicked!');
  }
}
