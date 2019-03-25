import { Component, OnInit, OnDestroy, Inject} from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private _menu: MenuService, @Inject(DOCUMENT) private document: Document) {
    this._menu.DarkMenu = true;
  }

  ngOnInit() {
    this.document.body.removeAttribute('class');
    this.document.body.classList.add('theme-contact');
  }
  ngOnDestroy() {
    this.document.body.removeAttribute('class');
    this._menu.DarkMenu = false;
  }

}
