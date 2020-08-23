import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor( 
    private http: HTTP,
  ) { }
  
  getCCAAS(){
    return this.http.get("https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ComunidadesAutonomas/", {}, {});
  }

  getProvincias(id){
    return this.http.get(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ProvinciasPorComunidad/${id}`, {}, {});
  }

  getMunicipios(id){
    return this.http.get(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${id}`, {}, {});
  }

  getGasolineras(id){
    return this.http.get(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/${id}`, {}, {});
  }

}
