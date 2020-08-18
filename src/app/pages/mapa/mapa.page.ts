import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  gasPoints: any = [
    {id: 1, "gasolinera": "gas-1" , "precio" : "1€"},
    {id: 2, "gasolinera": "gas-2" , "precio" : "1.2€"},
    {id: 3, "gasolinera": "gas-3" , "precio" : "0.9€"},
    {id: 4, "gasolinera": "gas-4" , "precio" : "2€"}
  ];

  constructor(public modalController: ModalController,) { }

  ngOnInit() {
  }
  
  async goToDetails(gasolinera) {
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
