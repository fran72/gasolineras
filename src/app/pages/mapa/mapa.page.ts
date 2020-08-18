import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  gasPoints: any = [
    { id: 1, "gasolinera": "gas-1", "precio": "1€" },
    { id: 2, "gasolinera": "gas-2", "precio": "1.2€" },
    { id: 3, "gasolinera": "gas-3", "precio": "0.9€" },
    { id: 4, "gasolinera": "gas-4", "precio": "2€" }
  ];

  constructor(public modalController: ModalController,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMap();
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

  async loadMap() {

    const loading = await this.loadingCtrl.create();
    loading.present();

    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    // create map
    const map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event
      .addListenerOnce(map, 'idle', () => {
        loading.dismiss();
      });
      
    const marker = new google.maps.Marker({
      position: {
        lat: myLatLng.lat,
        lng: myLatLng.lng
      },
      zoom: 8,
      map: map,
      title: 'Hello World!'
    });
  }


  // google.maps.event.addListener(marker, 'click', function() {window.location.href = marker.url;});
  // marker.addListener("click", () => {
  //   map.setZoom(8);
  //   map.setCenter(marker.getPosition() as google.maps.LatLng);
  // });

}
