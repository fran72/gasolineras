import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( 
    // private http: HTTP,
    private http: HttpClient,
    ) { }
  // private xml2json() {
  //   var req = this.http.get("my_link_for_xml");
  //   return req.map((res: Response) => {
  //     let c = res.text();
  //     let myJson = x2js.xml_str2json(c);
  //     return myJson;
  //   });
  // }


  getXml(url){
    // return this.http.get(url, {}, {});
    // return this.http.get(url);
    return this.http.get('/api/Listados/ComunidadesAutonomas/');
  }





}
