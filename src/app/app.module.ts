import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { FilterPipe } from './shared/pipes';
import { CartComponent, ProductsComponent, } from './components';
import { SharedModule } from './shared/shared.module';
import { ReplacePipe } from './shared/pipes/replace/replace.pipe';
import { RouterModule } from '@angular/router';
import { StarModule } from './components/star/star.module';


@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
     FilterPipe,
     ReplacePipe,
     ProductsComponent,
     CartComponent,


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
   BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StarModule,
    // PrimeNg
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
  ],

  providers: [CookieService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
