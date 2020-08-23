import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.page.html',
  styleUrls: ['./provincias.page.scss'],
})
export class ProvinciasPage implements OnInit {

  idCCAA: any;

  provincias = [];

  constructor(
    private router: Router,
    public navParams: NavParams,
    private shared: SharedService,
    ) { }

  ngOnInit() {
    if(this.router.getCurrentNavigation().extras.state){
      this.idCCAA = this.router.getCurrentNavigation().extras.state;
      this.shared.getProvincias(this.idCCAA).then( 
        (res) => {
          this.provincias = JSON.parse(res.data);
      });
    } 
  }

  goToMunicipios(idProvincia){
    this.router.navigateByUrl('/municipios', { state: idProvincia });
  }

}
