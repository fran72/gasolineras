import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  selector: 'app-ccaa',
  templateUrl: './ccaa.page.html',
  styleUrls: ['./ccaa.page.scss'],
})
export class CcaaPage implements OnInit {

  dataXML;
  ccaas = [
    { "id": 1, "CCAA": "Andalucia" },
    { "id": 2, "CCAA": "Aragón" },
    { "id": 3, "CCAA": "Asturias" },
    { "id": 4, "CCAA": "Baleares" },
    { "id": 5, "CCAA": "Canarias" }
  ];

  objs: any = {};

  constructor(
    private router: Router,
    private shared: SharedService,
    private ngxXml2jsonService: NgxXml2jsonService
    ) { }

  ngOnInit() {
    alert( 'preee this.dataXML' );

    this.shared.getXml('/api/Listados/ComunidadesAutonomas/').subscribe( res => {

      console.log(res);
      this.dataXML = res;

      alert( 'post this.dataXML' );





      // const parser = new DOMParser();
      // const xml = parser.parseFromString(this.dataXML, 'text/xml');
      // const obj = this.ngxXml2jsonService.xmlToJson(xml);
      // this.objs = obj;
      // alert(JSON.stringify(this.objs));

    });
  }


  goToProvincias(idCCAA){
    this.router.navigateByUrl('/provincias', { state: idCCAA });
  }

}
