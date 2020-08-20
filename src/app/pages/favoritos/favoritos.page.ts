import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favoritos;

  constructor(
    public modalController: ModalController
    ) { }

  ngOnInit() {
    if(localStorage.getItem("favoritos")) this.favoritos = JSON.parse(localStorage.getItem("favoritos"));
  }

  deleteFav(fav){
    this.favoritos = this.favoritos.filter(item => item !== fav);
    localStorage.setItem("favoritos", JSON.stringify(this.favoritos));
  }

  
  async goToDetails(gasolinera, event) {
    event.stopPropagation();
    const modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        gasolinera
      }
    });

    modal.onDidDismiss()
      .then((data) => {
      });

    return await modal.present();
  }

}
