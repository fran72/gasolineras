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

  isFavorite: boolean = false;

  constructor(public params: NavParams,
    private socialSharing: SocialSharing,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.gasolineraDetails = this.params.get('gasolinera');
    this.favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if(this.favoritos.length !== 0) {
      
      let found = this.favoritos.find(element => element === this.gasolineraDetails);
      if(!found || found===undefined) {
        this.isFavorite = false;
      } else {
        this.isFavorite = true;
      }
    }

  }
  
  addRemoveFavorito(gasolinera){
    if(this.favoritos.length === 0) {
      this.favoritos.push(gasolinera);
      this.isFavorite = true;
    } else {
      let found = this.favoritos.find(element => element === gasolinera);
      if(!found || found===undefined) {
        this.favoritos.push(gasolinera);
        this.isFavorite = true;
        console.log('isfav.... ' , this.isFavorite);

      } else if(found) {
        this.favoritos = this.favoritos.filter(element => element !== gasolinera);
        this.isFavorite = false;
  
        console.log('favoritossss.... ', this.favoritos);
        console.log('isfav.... ' , this.isFavorite);
  
        localStorage.setItem('favoritos' , JSON.stringify(this.favoritos));
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
    this.socialSharing.share('Compartir Gasolinera', null, null, null).then(() => {
    }).catch(() => {
    });
  }

}
