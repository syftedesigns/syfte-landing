import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public DarkMenu: boolean = false;
  constructor() { }
}
