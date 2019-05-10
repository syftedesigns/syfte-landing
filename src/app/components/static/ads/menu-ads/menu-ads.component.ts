import { Component, OnInit } from '@angular/core';
import { CampaignsService } from '../../../../services/ads/campaigns.service';

@Component({
  selector: 'app-menu-ads',
  templateUrl: './menu-ads.component.html',
  styleUrls: ['./menu-ads.component.css']
})
export class MenuADSComponent implements OnInit {

  constructor(public _ads: CampaignsService) { }

  ngOnInit() {
  }

}
