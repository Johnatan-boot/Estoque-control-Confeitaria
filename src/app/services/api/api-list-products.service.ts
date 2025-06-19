import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produto } from 'src/app/models/produtos/produto';
import { Produtos } from 'src/app/models/produtos/produtos';
@Injectable({
  providedIn: 'root',
})
export class ApiListProductsService {
  private listproductsUrl: string = 'http://localhost:3100/api/products';

  constructor(private http: HttpClient) {}

  retrieveAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.listproductsUrl);
  }

  retrieveById(id: number): Observable<Produto> {
    return this.http.get<Produtos>(`${this.listproductsUrl}/${id}`);
  }

  save(produto: Produtos): Observable<Produto> {
    if (produto._id) {
      return this.http.put<Produto>(
        `${this.listproductsUrl}/${produto._id}`,
        produto
      );
    } else {
      return this.http.post<Produto>(`${this.listproductsUrl}`, produto);
    }
  }

  deleteById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.listproductsUrl}/${id}`);
  }

  getApiListProducts() {
    return this.http.get<any>('http://localhost:3100/api/products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}

let PRODUTOS: Produto[] = [
  {
    _id: '1',
    produto: 'Bolo A',
    category: 'Bolo',
    dateFabricacao: 'November 2, 2019',
    description: 'Um Delicioso Bolo...',
    dateValidade: 'November 5, 2019',
    code: 'XLF-1212',
    rating: '3',
    price: '12.99',
    quantidade: '30',
    imageUrl: 'https://i.pinimg.com/736x/b9/5b/a0/b95ba042faf55ae2f82666f3a467cab0.jpg',
  },
  {
    _id: '2',
        produto: 'Bolo B',
        category: 'Bolo',
        dateFabricacao: 'dezembro 25, 2019',
        description: 'Um Delicioso Bolo...',
        dateValidade: 'dezembro 30, 2019',
        code: 'XLF-1212',
        rating: '3',
        price: '13.99',
        quantidade: '40',
        imageUrl: 'https://i.pinimg.com/736x/b9/5b/a0/b95ba042faf55ae2f82666f3a467cab0.jpg',
  },
  {
    _id: '3',
    produto: 'Bolo C',
    category: 'Bolo',
    dateFabricacao: 'November 2, 2019',
    description: 'Um Delicioso Bolo...',
    dateValidade: 'November 5, 2019',
    code: 'XLF-1212',
    rating: '3',
    price: '12.99',
    quantidade: '30',
    imageUrl: 'https://i.pinimg.com/736x/b9/5b/a0/b95ba042faf55ae2f82666f3a467cab0.jpg',
  },
  {
    _id: '4',
    produto: 'Bolo D',
    category: 'Bolo',
    dateFabricacao: 'November 2, 2019',
    description: 'Um Delicioso Bolo...',
    dateValidade: 'November 5, 2019',
    code: 'XLF-1212',
    rating: '3',
    price: '12.99',
    quantidade: '30',
    imageUrl: '/assets/images/cli.png',
  },
  {
    _id: '5',
    produto: 'Bolo E',
    category: 'Bolo',
    dateFabricacao: 'November 2, 2019',
    description: 'Um Delicioso Bolo...',
    dateValidade: 'November 5, 2019',
    code: 'XLF-1212',
    rating: '3',
    price: '12.99',
    quantidade: '30',
    imageUrl: '/assets/images/cli.png',
  },
];
