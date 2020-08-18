import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
 import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  gasolineraDetails: {};

  favoritos : any;

  constructor(public params: NavParams,
    private socialSharing: SocialSharing,
    public modalController: ModalController,
  ) { }



  ngOnInit() {
    this.gasolineraDetails = this.params.get('gasolinera');
    console.log(this.gasolineraDetails);

    console.log( 'vvdvdv....', this.favoritos );

    this.favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    console.log( 'nasa....', this.favoritos );

  }

  
  addFavorito(gasolinera){

    if(this.favoritos.length === 0) {
      this.favoritos.push(gasolinera);
    } else {
      let found = this.favoritos.find(element => element === gasolinera);
      if(!found || found===undefined) {
        this.favoritos.push(gasolinera);
      }
    }

    localStorage.setItem('favoritos' , JSON.stringify(this.favoritos));
  }


  closeModal(){
    this.modalController.dismiss({
        'dismissed': true
      });
  }


  share(){
    this.socialSharing.share('Compartir Gasolinera', 'Subject', 'url', 'url2').then(() => {
    }).catch(() => {
    });
  }

}
