import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css']
})
export class HomeVideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Para los navegadores que no soportan el autoplay
    $(document).ready(() => {
      setTimeout(() => {
        $('#playVideo').trigger('click');
      }, 1500);
      // $('#video-bg')[0].autoplay = true;
    });
  }
  // Arranca el video si esta en pausa
  startVideo() {
    const video: any = document.getElementById('video-bg');
    const button: any = document.getElementById('playVideo');
    if (video.paused) {
       video.play();
       console.log('Normal');
       button.textContent = '||';
    } else {
      video.play();
      console.log('Debugged');
       /*video.pause();
       button.textContent = '>';*/
       return;
    }
  }
}
