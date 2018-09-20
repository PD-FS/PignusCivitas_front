import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Peer from 'peerjs';

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
export class IntercomPage implements OnInit{

  @ViewChild('mensaje') mensaje : ElementRef;
  @ViewChild('video') video : ElementRef;

  private peer : Peer;
  private peerToConnect: string;
  private callOpen: boolean = true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {



    this.peer = new Peer({key: 'pignuscivitasapp'})

  }

  ngOnInit(): void {

    let m = this.mensaje.nativeElement

    this.peer.on('open', function () {
        m.innerHTML = "Esperando conexión ...";

    });

    let v = this.video.nativeElement

    var n = <any>navigator
    n.getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia;
    let callStatus = this.callOpen
    this.peer.on('call', function(call) {

      n.getUserMedia({video: true, audio: true}, function(stream) {
        if(callStatus){
          call.answer(stream); // Answer the call with an A/V stream.
        } else {
          call.close()
        }
        call.on('stream', function(remoteStream) {
          m.innerHTML = "Conectado"
          v.src = URL.createObjectURL(remoteStream)
          v.play()
        });

        call.on('close', function(){
          m.innerHTML = "Finalizado"
          v.pause()
        });

      }, function(err) {
        console.log('Failed to get local stream' ,err);
      });
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntercomPage');
  }


  disconnectCall()
  {
    this.callOpen = false
    let m = this.mensaje.nativeElement;
    this.peer.on('call', function(call) {
      call.close()
      console.log('entre en disconect')
      m.innerHTML = "Llamada finalizada"
    })
  }

  makeCall() {

    let v = this.video.nativeElement
    let peer = this.peer
    let connid = this.peerToConnect
    let m = this.mensaje.nativeElement

    var n = <any>navigator
    n.getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia;
    n.getUserMedia({video: false, audio: true}, function(stream) {
      var call = peer.call(connid, stream);
      call.on('stream', function(remoteStream) {
        m.innerHTML = "Conectado"
        v.src = URL.createObjectURL(remoteStream)
        v.play()
      });
    }, function(err) {
      console.log('Failed to get local stream' ,err);
    });
  }
}
