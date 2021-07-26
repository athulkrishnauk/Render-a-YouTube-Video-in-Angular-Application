import { Component } from '@angular/core';
import YTPlayer from 'yt-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtubePlayer';
  player;

  ngOnInit() {
    // Set a youtube video in player using youtube video id
    this.player = new YTPlayer('#player1');
    this.player.load('b7BzAsOCq1M', false);
    this.player.setVolume(100);

    // Playing time
    this.player.on('timeupdate', (seconds) => {
      console.log(seconds);
    })
  }

  // Player play function
  play() {
    this.player.play();
  }

  // Player pause function
  pause() {
    this.player.pause();
  }

  // Player stop function
  stop() {
    this.player.stop();
  }

  // Player mute function
  mute() {
    this.player.mute();
  }

  // Player unmute function
  unmute() {
    this.player.unMute();
  }
    
  // Player seek function
  seek(timeValue) {
    this.player.seek(timeValue);
  }

  // Player volume up and down function
  setVolume(volume) {
    if(volume != "") {
      this.player.setVolume(volume)
    } 
  }
  
}
