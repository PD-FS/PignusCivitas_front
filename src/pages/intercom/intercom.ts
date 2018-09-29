import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { fromEvent } from 'rxjs';

declare var Peer: any;

/**
 * Generated class for the IntercomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intercom',
  templateUrl: 'intercom.html',
})
export class IntercomPage implements AfterViewInit {

  @ViewChild('myvideo') myvideo: ElementRef;
  @ViewChild('myanswerButton') myanswerButton: ElementRef;
  @ViewChild('myhangupButton') myhangupButton: ElementRef;
  @ViewChild('mycallButton') mycallButton: ElementRef;


  peer;
  mypeerid;
  anotherid;
  mymsg: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    // PeerServer Configuration
    const peerserver = {
      host: 'rtc.pignus.app',
      port: 443,
      path: '/',
      secure: true,
      debug: 3,
    };

    this.peer = new Peer(null, peerserver);

  }

  ngAfterViewInit(): void {

    // Get Assigned Peer id
    this.peer.on('open', id => {
      this.mypeerid = id;
      console.log('id',id);
    });

    // Variables and constants
    const n = <any>navigator;
    const video = this.myvideo.nativeElement;
    const answerButton = this.myanswerButton.nativeElement;
    const hangupButton = this.myhangupButton.nativeElement;
    const callButton = this.mycallButton.nativeElement;

    hangupButton.style = 'display: none';
    answerButton.style = 'display: none';
    video.style = 'display: none';

    this.mymsg = 'Awaiting...';

    n.getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia;

    const answerOnClick = fromEvent(answerButton, 'click');
    const hangupOnClick = fromEvent(hangupButton, 'click');

    // Answer call context
    this.peer.on('call', call => {
      //if (n.mediaDevices) {
        n.getUserMedia({video: true, audio: true}, stream => {
          answerButton.style = 'display: inline';
          this.mymsg = 'Incoming Call...';
          callButton.style = 'display: none';
          // Answer click event handler
          answerOnClick.subscribe(x => {
            call.answer(stream);
            call.on('stream', remotestream => {
              video.style = 'display: block';
              video.src = URL.createObjectURL(remotestream);
              video.play();
              answerButton.style = 'display: none';
              hangupButton.style = 'display: block';
              this.mymsg = 'Connected';
            });
          }, err => {
            console.log('Error:', err);
          }, () => {
            console.log('Completed');
          });

          // Hangup click event handler
          hangupOnClick.subscribe(x => {
            call.close();
          }, err => {
            console.log('Error:', err);
          }, () => {
            console.log('Completed');
          });

          call.on('close', () => {
            video.style = 'display: none';
            video.src = '';
            hangupButton.style = 'display: none';
            callButton.style = 'display: block';
            this.mymsg = 'Awaiting...';
            stream.getAudioTracks()[0].stop();
            stream.getVideoTracks()[0].stop();
          });


       }, error => {
          this.mymsg = 'Failed to get local stream ' + error;
        });
      //}

    });

    // On Error Handler
    this.peer.on('error', err => {
      this.mymsg = err;
    });

    // On disconnected handler
    this.peer.on('disconnected', () => {
      this.peer.reconnect();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntercomPage');
  }


  makeCall() {

    // Variables and constants
    const n = <any>navigator;
    const video = this.myvideo.nativeElement;
    const hangupButton = this.myhangupButton.nativeElement;
    const callButton = this.mycallButton.nativeElement;
    this.mymsg = 'Calling...';
    n.getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia;

    const hangupOnClick = fromEvent(hangupButton, 'click');

    callButton.style = 'display: none';

    // Making the Call
    n.getUserMedia({video: true, audio: true}, (stream) => {
      const call = this.peer.call(this.anotherid, stream);

      call.on('close', () => {
        video.style = 'display: none';
        video.src = '';
        hangupButton.style = 'display: none';
        callButton.style = 'display: block';
        this.mymsg = 'Awaiting...';
        stream.getAudioTracks()[0].stop();
        stream.getVideoTracks()[0].stop();
      });

      call.on('stream', remotestream => {
        video.style = 'display: block';
        video.src = URL.createObjectURL(remotestream);
        video.play();
        hangupButton.style = 'display: block';
        this.mymsg = 'Connected';

        // Hangup click event handler
        hangupOnClick.subscribe(x => {
          call.close();
        }, err => {
          console.log('Error:', err);
        }, () => {
          console.log('Completed');
        });
      });
    }, error => {
      console.log('Failed to get local stream ' + error);
    });

  }
}
