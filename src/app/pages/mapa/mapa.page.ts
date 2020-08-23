import { Component, OnInit } from '@angular/core';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  tempGasolinera: any;
  mapRef = null;

  idMunicipio;
  gasolineras;

  constructor(
    public modalController: ModalController,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    
    private router: Router,
    public navParams: NavParams,
    private shared: SharedService,
  ) { }

  ngOnInit() {
    if(this.router.getCurrentNavigation().extras.state){
      this.idMunicipio = this.router.getCurrentNavigation().extras.state;

      this.shared.getGasolineras(this.idMunicipio).then( 
        (res) => {
          this.gasolineras = JSON.parse(res.data);
          if(this.gasolineras && this.gasolineras.ListaEESSPrecio && this.gasolineras.ListaEESSPrecio.length!==0){
            this.loadMap();
          } 
      });
    } 


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

    let centerLAT = this.gasolineras.ListaEESSPrecio[0]['Latitud'].replace(",",".");
    let centerLANG = this.gasolineras.ListaEESSPrecio[0]['Longitud (WGS84)'].replace(",",".");

    const myLatLng = {
      lat: parseFloat(centerLAT),
      lng: parseFloat(centerLANG)
    };

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


    //kml
    var src = './assets/kml/EstacionesDeServicio.kml';

    var kmlLayer = new google.maps.KmlLayer(src, {
      suppressInfoWindows: true,
      preserveViewport: false,
      map: this.mapRef // map
    });
    kmlLayer.addListener('click', function(event) {
      var content = event.featureData.infoWindowHtml;
      var testimonial = document.getElementById('mapkml');
      testimonial.innerHTML = content;
    });

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker, i;

    for (let gasolinera of this.gasolineras.ListaEESSPrecio) {
      let markLAT = gasolinera['Latitud'].replace(",",".");
      let markLANG = gasolinera['Longitud (WGS84)'].replace(",",".");

      marker = new google.maps.Marker({
        position: new google.maps.LatLng(parseFloat(markLAT), parseFloat(markLANG)),
        map: map,
        data: gasolinera
      });

      this.tempGasolinera = gasolinera;

      google.maps.event.addListener(marker, 'click', ( (marker, i) => {
        return () => {
          this.goToDetails(marker.data);
        }
      })(marker, i));
    }
  }
}