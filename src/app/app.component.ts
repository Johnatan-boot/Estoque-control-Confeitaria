import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CartService } from './shared/services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'stock-control';
  public totalItem : number = 0;

  constructor(
    private primeNgConfig: PrimeNGConfig,
    private cartService : CartService
  ) {}

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
    this.primeNgConfig.setTranslation({
      apply: 'Aplicar',
      clear: 'Limpar'
    })

    //Chamando o metodo de pegar listar todos os produtos e mostrar nos cards
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }






}
