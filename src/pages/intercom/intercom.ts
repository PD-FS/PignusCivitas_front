import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Peer from 'peerjs';
import { SecurityProvider } from '../../providers/security/security';

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

  private peer : Peer;
  private role : number;
  private connid : string;
  private id: string;
  public message: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private security: SecurityProvider) {

    this.role = this.security.getRole()

    if(this.role == 0) {
      this.id = 'Vigilante'
    }
    else{
      this.id = 'Ciudadano'
      this.connid = 'Vigilante'
    }


  }

  ngOnInit(): void {

    this.peer = new Peer(this.id)

    let m = this.mensaje.nativeElement

    this.peer.on('connection', function(conn) {
      conn.on('data', data => {
        if(data){
          m.innerHTML = data
        }
      });
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IntercomPage');
  }

  private sendMessage()
  {
    var conn = this.peer.connect(this.connid);

    var hack = this.message
    conn.on('open', function(){
      conn.send(hack);
    });


  }

  updateMessage(data) {
    this.mensaje = data
  }

  receiveData() {

  }
}
