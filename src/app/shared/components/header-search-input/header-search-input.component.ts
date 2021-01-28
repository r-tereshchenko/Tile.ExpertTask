import { Component, OnInit } from '@angular/core';

import { inputAnimation } from '../../animations';
import { HeaderSearchInputService } from '../../header-search-input.service';

@Component({
  selector: 'app-header-search-input',
  templateUrl: './header-search-input.component.html',
  styleUrls: ['./header-search-input.component.scss'],
  animations: [ inputAnimation ],
  host: { '[@fadeInOut]': 'in' }
})
export class HeaderSearchInputComponent implements OnInit {

  inputField = '';

  constructor(
    public searchS: HeaderSearchInputService
  ) { }

  ngOnInit(): void {
  }

}
