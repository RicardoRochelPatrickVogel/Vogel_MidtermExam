import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './product-list/product-list.component';
import { SellerPageComponent } from './seller-page/seller-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductDetailsComponent,
    ProductsListComponent,
    SellerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }