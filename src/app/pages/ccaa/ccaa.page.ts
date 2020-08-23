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

  ccaas = [];

  constructor(
    private router: Router,
    private shared: SharedService,
    ) {
     }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.shared.getCCAAS().then( 
      (res) => {
        this.ccaas = JSON.parse(res.data);
    });
  }

  goToProvincias(idCCAA){
    this.router.navigateByUrl('/provincias', { state: idCCAA });
  }

}