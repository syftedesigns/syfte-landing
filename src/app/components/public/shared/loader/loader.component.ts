import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CampaignObject } from '../../../../classes/campaign/campaign.model';
import { CampaignsService } from '../../../../services/ads/campaigns.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styles: []
})
export class LoaderComponent implements OnInit {
  private Campaign: CampaignObject;
  constructor(private dialogRef: MatDialogRef<LoaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CampaignObject,
    private _send: CampaignsService) {
      this.Campaign = data;
    }

  ngOnInit() {
    setTimeout((): void => {
      this._send.subscribeToCampaign(this.Campaign, 'campaign').subscribe(
        (ticket) => {
          console.log(ticket);
          if (ticket.status) {
            // Significa que envio el mail
            this.dialogRef.close(true);
          } else {
            this.dialogRef.close(false);
          }
        }, () => {
          this.dialogRef.close(false);
        }
      );
    }, 500);
  }

}
