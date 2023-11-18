import { Component, OnInit } from '@angular/core';
import { Layouts } from './layout/layout';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'orden_tigasinestor';
  Layouts = Layouts;
  layout: Layouts = Layouts.Simple;

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.layout = data.state.root.firstChild?.data['layout'];
      }
    });
  }
}
