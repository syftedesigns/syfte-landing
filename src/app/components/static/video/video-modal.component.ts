import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent implements OnInit {
   public anchor: number = 0;
   public height: number = 0;
  constructor(public dialogRef: MatDialogRef<VideoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  ngOnInit() {
    this.anchor = this.data.width;
    this.height = this.data.height;
  }
  closeVideo(): void {
    this.dialogRef.close();
  }
}
