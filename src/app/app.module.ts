import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoModule} from './todo/todo.module';
import { HoverEffectPipe } from './hover-effect.pipe';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { HighlightPipe } from './highlight.pipe';
import { PathLocationStrategy } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SigninComponent } from './signin/signin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import{ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HoverEffectPipe,
    TasksComponent,
    HighlightPipe,
    ProductsComponent,
    OrderViewComponent,
    SearchComponent,
    PageNotFoundComponent,
    ProductViewComponent,
    ProductIdComponent,
    AdminHomeComponent,
    SigninComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    FormsModule,
    ReactiveFormsModule //step1 is to add reactive forms module
  ],
  providers: [
    //{provide:LocationStrategy, useClass:PathLocationStrategy}
    {provide:LocationStrategy, useClass:PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
