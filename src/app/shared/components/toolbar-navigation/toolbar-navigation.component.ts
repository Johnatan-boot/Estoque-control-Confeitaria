import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductEvent } from 'src/app/models/enums/products/ProductEvent';
import { ProductFormComponent } from 'src/app/modules/products/components/product-form/product-form.component';
import { CartService } from '../../services';

@Component({
  selector: 'app-toolbar-navigation',
  templateUrl: './toolbar-navigation.component.html',
  styleUrls: [],
})
export class ToolbarNavigationComponent implements OnInit {
  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(
    private cookie: CookieService,
    private router: Router,
    private dialogService: DialogService,
    private cartService : CartService,

  ) {}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  handleLogout(): void {
    this.cookie.delete('USER_INFO');
    void this.router.navigate(['/home']);
  }

  handleSaleProduct(): void {
    const saleProductAction = ProductEvent.SALE_PRODUCT_EVENT;

    this.dialogService.open(ProductFormComponent, {
      header: saleProductAction,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        event: { action: saleProductAction },
      },
    });
  }
}
