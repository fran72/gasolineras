import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.page.html',
  styleUrls: ['./municipios.page.scss'],
})
export class MunicipiosPage implements OnInit {

  idProvincia: any;
  municipios = [];

  constructor(
    private router: Router,
    public navParams: NavParams,
    private shared: SharedService,
    ) { }

  ngOnInit() {
    if(this.router.getCurrentNavigation().extras.state){
      this.idProvincia = this.router.getCurrentNavigation().extras.state;

      this.shared.getMunicipios(this.idProvincia).then( 
        (res) => {
          this.municipios = JSON.parse(res.data);
      });
    } 
  }

  goToMapa(id){
    this.router.navigateByUrl('/mapa', { state: id });
  }

}
