import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favoritos;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("favoritos")) this.favoritos = JSON.parse(localStorage.getItem("favoritos"));
  }

  deleteFav(fav){
    this.favoritos = this.favoritos.filter(item => item !== fav);
    localStorage.setItem("favoritos", JSON.stringify(this.favoritos));
  }
}
