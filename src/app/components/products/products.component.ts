import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { CartService } from 'src/app/shared/services';
import { Productz } from 'src/app/models/productz/productz';
import { Produtos } from 'src/app/models/produtos/produtos';
import { ApiListProductsService } from 'src/app/services/api';
import { Produto } from 'src/app/models/produtos/produto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  filteredProducts: Produtos[] = [];

  _produtos: Produto[] = [];

  _filterBy: string;

  public productList: any;
  public filterCategory: any;
  searchKey: string = '';
  public searchTerm!: string;

  constructor(
    private api: ApiService,
    private cartService: CartService,
    private apiLisProductstService: ApiListProductsService
  ) {}

  products: Productz[] = [
    {
      _id: '1',
      image: './assets/card-bolo1.jpeg',
      name: 'Bolo de chocolate Laka',
      category: 'Bolos Festas',
      price: 'R$150,00',
      quantidade: '30',
      validade: '05/02/2025',
    },
    {
      _id: '2',
      image: './assets/card-bolo2.jpeg',
      name: 'Bolo de Red Velvet',
      category: 'Bolos Festas',
      price: 'R$150,00',
      quantidade: '40',
      validade: '15/02/2025',
    },
    {
      _id: '3',
      image: './assets/card-bolo3.jpeg',
      name: 'Bolo Prestigio',
      category: 'Bolos Festas',
      price: 'R$160,00',
      quantidade: '80',
      validade: '18/02/2025',
    },
    {
      _id: '4',
      image: './assets/card-bolo1.jpeg',
      name: 'Bolo Prestigio',
      category: 'Bolos Festas',
      price: 'R$160,00',
      quantidade: '80',
      validade: '18/02/2025',
    },
    {
      _id: '5',
      image: './assets/card-bolo2.jpeg',
      name: 'Bolo Prestigio',
      category: 'Bolos Festas',
      price: 'R$160,00',
      quantidade: '80',
      validade: '18/02/2025',
    },
    {
      _id: '6',
      image: './assets/card-bolo3.jpeg',
      name: 'Bolo Prestigio',
      category: 'Bolos Festas',
      price: 'R$160,00',
      quantidade: '80',
      validade: '18/02/2025',
    },
  ];

  ngOnInit(): void {
    this.retrieveAll();

    this.api.getProductz().subscribe((res: any) => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        if (
          a.category === 'bolostradcionais' ||
          a.category === 'boloscobertura'
        ) {
          a.category = ' bolosfestas ';
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productList);
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  retrieveAll(): void {
    this.apiLisProductstService.retrieveAll().subscribe({
      next: produtos => {
        this._produtos = produtos;
        this.filteredProducts = this._produtos;
      },
      error: (err) => console.log('Error', err),
    });
  }

  deleteById(produtoId: string): void {
    this.apiLisProductstService.deleteById(produtoId).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: (err) => console.log('Error', err),
    });
  }

  set filters(value: string) {
    this._filterBy = value;

    this.filteredProducts = this._produtos.filter(
      (produto: Produto) =>
        produto.produto
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filters() {
    return this._filterBy;
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }

  // chamando o método de pesquisa
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
