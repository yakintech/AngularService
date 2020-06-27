import { Injectable } from '@angular/core';
import { menufoods } from '../staticsrc/foods';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  GetMenus(){
    return menufoods;
  }


}
