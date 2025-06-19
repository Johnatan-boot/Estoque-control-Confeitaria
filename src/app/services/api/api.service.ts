import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Produtos } from 'src/app/models/produtos/produtos';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private productsUrl: string = 'http://localhost:3000/api/productList';

  constructor(private http : HttpClient) { }

  getProductz(){
  //return this.http.get<any>("https://fakestoreapi.com/products")
 return this.http.get<any>("http://localhost:3333/productList")
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  retrieveAll(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.productsUrl);
}

  getProduct(){
    return this.http.get<any>(
      "http://localhost:3000/api/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}


