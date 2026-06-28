import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/product-list/product-list')
      .then(component => component.ProductList)
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./features/product-detail/product-detail')
      .then(component => component.ProductDetail)
  },
];
