import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.page.html',
  styleUrls: ['./municipios.page.scss'],
})
export class MunicipiosPage implements OnInit {

  idProvincia;

  municipios = [
    { "id": 17621101, "municipio": "Alcalá del Valle", "provincia": "CÁDIZ", "CCAA": "Andalucia" },
    { "id": 17631101, "municipio": "Algar", "provincia": "CÁDIZ", "CCAA": "Andalucia" },
    { "id": 17641101, "municipio": "Algeciras", "provincia": "CÁDIZ", "CCAA": "Andalucia" },
    { "id": 17651101, "municipio": "Algodonales", "provincia": "CÁDIZ", "CCAA": "Andalucia" },
    { "id": 17661101, "municipio": "Arcos de la Frontera", "provincia": "CÁDIZ", "CCAA": "Andalucia" },
    { "id": 17681101, "municipio": "Barbate", "provincia": "CÁDIZ", "CCAA": "Andalucia" },
  ]

  constructor(
    private router: Router,
    public navParams: NavParams,
    ) { }

  ngOnInit() {
     // aqui haria la llamada con el IDPROVINCIA recibido en el STATE, recuperaria el xml y lo parsearia a json ( con xml2json...me da errores y lo dejo para el final)
     if(this.navParams.get('state')) this.idProvincia = this.navParams.get('state');
     console.log(this.idProvincia)
  }

  goToMapa(id){
    this.router.navigateByUrl('/mapa', { state: id });
  }

}
