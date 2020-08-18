import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.page.html',
  styleUrls: ['./provincias.page.scss'],
})
export class ProvinciasPage implements OnInit {

  @Input() state?: any;

  idCCAA: any;

  // dejo estas provincias hasta solucionar el error de xml2json
  provincias = [
    { "id": 1101, "provincia": "CÁDIZ", "CCAA": "Andalucia" },
    { "id": 1401, "provincia": "CÓRDOBA", "CCAA": "Andalucia" },
    { "id": 1801, "provincia": "GRANADA", "CCAA": "Andalucia" },
    { "id": 2101, "provincia": "HUELVA", "CCAA": "Andalucia" },
    { "id": 2301, "provincia": "JAÉN", "CCAA": "Andalucia" },
    { "id": 2901, "provincia": "MÁLAGA", "CCAA": "Andalucia" },
    { "id": 4101, "provincia": "SEVILLA", "CCAA": "Andalucia" },
  ];

  constructor(
    private router: Router,
    public navParams: NavParams,
    ) { }

  ngOnInit() {
    // aqui haria la llamada con el IDPROVINCIA recibido en el STATE, recuperaria el xml y lo parsearia a json ( con xml2json...me da errores y lo dejo para el final)
    if(this.navParams.get('state')) this.idCCAA = this.navParams.get('state');

  }

  goToMunicipios(idProvincia){
    this.router.navigateByUrl('/municipios', { state: idProvincia });
  }

}
