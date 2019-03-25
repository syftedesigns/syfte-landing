import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  public sticky: boolean = false;
  MenuPosition: number;
  // Para saber la posición del menu
  @ViewChild('stickyMenu') stickyMenu: ElementRef;
  // Verificamos cuando el DOM hace scrolling
  @HostListener('window:scroll', ['$event']) scrolling() {
    const windowScroll = window.pageYOffset;
    if (windowScroll > this.MenuPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  constructor(private _navigate: Router, public _menu: MenuService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.MenuPosition = this.stickyMenu.nativeElement.offsetTop;
  }
  ToggleOverlayMenu(event: any): void {
    $(document).ready((): void => {
      event.preventDefault();
      $('.menu-digital').hide();
      $('.menu-overlay').toggleClass('open');
      $('.menu').toggleClass('open');
    });
  }
  CloseOverlayMenu(event: any): void  {
    $(document).ready((): void => {
      event.preventDefault();
      $('.menu-digital').show();
      $('.menu-overlay').removeClass('open');
      $('.menu').removeClass('open');
    });
  }
  ToRouting(sendToUrl: string): void {
    $(document).ready((): void => {
      $('.menu-digital').show();
      $('.menu-overlay').removeClass('open');
      $('.menu').removeClass('open');
    });
    this._navigate.navigate([`/${sendToUrl}`]);
  }
}
