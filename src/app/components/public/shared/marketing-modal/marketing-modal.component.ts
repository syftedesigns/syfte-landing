import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';
import {MatBottomSheet} from '@angular/material';
import { GeneratorTextComponent } from './generator-text.component';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-marketing-modal',
  templateUrl: './marketing-modal.component.html',
  styleUrls: ['./marketing-modal.component.css']
})
export class MarketingModalComponent implements OnInit {
    public emailDef: string = '';
    public textConsult: string = '';
    public campaignType: string = 'Ads Marketing';
  constructor(public dialogRef: MatDialogRef<MarketingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    @Inject(DOCUMENT) private document: Document,
    private bottomSheet: MatBottomSheet) {
      if (data && data !== '') {
        this.emailDef = data;
        return;
      }
    }

  ngOnInit() {
  }
  closeModal() {
    setTimeout(() => {
      this.dialogRef.close();
    }, 100);
  }
  generateTextSheet() {
    const defaultTextComponent = this.bottomSheet.open(GeneratorTextComponent);
    defaultTextComponent.afterDismissed().subscribe(
      (textGenerated) => {
        if (textGenerated) {
          this.textConsult = textGenerated;
        }
      }
    );
  }
  sendCampaignMarketing(CampaignTicket: NgForm): void {
    if (CampaignTicket.invalid) {
      throw new Error('The form is invalid');
    }
    console.log(CampaignTicket.value);
  }
}
