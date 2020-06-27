import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  data = [];
  constructor(private _menuservice:MenuService) { }

  ngOnInit(): void {

    this.data = this._menuservice.GetMenus();
  
  }

}
