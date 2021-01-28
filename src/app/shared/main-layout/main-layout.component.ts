import { Component, OnInit } from '@angular/core';

import { INotifications } from '../interfaces';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  notifications: INotifications[] = new Array(18);

  constructor() { }

  ngOnInit(): void {
  }

}
