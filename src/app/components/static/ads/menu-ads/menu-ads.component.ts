import { Component, OnInit, DoCheck, ElementRef } from '@angular/core';
import { CampaignsService } from '../../../../services/ads/campaigns.service';

@Component({
  selector: 'app-menu-ads',
  templateUrl: './menu-ads.component.html',
  styleUrls: ['./menu-ads.component.css']
})
export class MenuADSComponent implements OnInit, DoCheck {
  constructor(public _ads: CampaignsService) { }

  ngOnInit() {
  }
  ngDoCheck() {
    const withBtn = document.getElementById('button-menu').offsetWidth;
    const elements: any = document.getElementsByClassName('mat-menu-panel');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.width = `${withBtn}px`;
    }
  }
}
