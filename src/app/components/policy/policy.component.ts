import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit() {
    this._document.body.classList.add('theme-about');
  }
  ngOnDestroy() {
    this._document.body.removeAttribute('class');
  }
}
