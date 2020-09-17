import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { ProductsComponent } from './products/products.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { SigninComponent } from './signin/signin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [

  {path: '', redirectTo:'products',pathMatch:'full'},
  {path: 'signin',component:SigninComponent},
  {path: 'signout',component:CheckoutComponent},
  {path: 'observe',component:ObservableComponent},
  {path: 'admin',component:AdminHomeComponent,canActivate:[AdminGuardGuard]},
  {path:'products',
    children: [
      {path:'view',component: ProductViewComponent},
      {path:'view/:id3/:id4',component:ProductIdComponent}
    ]
},
  {path: 'tasks',component:TasksComponent},
  {path: 'order/:id/:id1',component:OrderViewComponent},
  {path: 'search',component:SearchComponent},

  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {path: '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
