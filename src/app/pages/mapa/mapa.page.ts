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
  tempLocation: any;
  mapRef = null;

  constructor(
    public modalController: ModalController,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.loadMap();
  }

  async goToDetails(gasolinera) {
    console.log(gasolinera);
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
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    google.maps.event
      .addListenerOnce(this.mapRef, 'idle', () => {
        loading.dismiss();
      });



    // aqui añadirias el objeto que vas a enviar a detalle!
    var locations = [
      ['Bondi Beach', 39.4625024, -0.3964928, 4, {id: 1, gasolinera: "gas-1", precio: "1€"} ],
      ['Coogee Beach', 39.4725044, -0.3764948, 5, {id: 2, gasolinera: "gas-2", precio: "2€"}],
      ['Cronulla Beach', 39.7625044, -0.4964948, 3, {id: 3, gasolinera: "gas-3", precio: "3€"}],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker, i;

    for (let location of locations) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
        data: location[4]
      });

      this.tempLocation = location;

      google.maps.event.addListener(marker, 'click', ( (marker, i) => {
        return () => {
          console.log(marker.data);
          this.goToDetails(marker.data);
        }
      })(marker, i));
    }

  }
}