import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductList } from './features/product-list/product-list'
import { ProductDetail } from './features/product-detail/product-detail';
import { ProductCard } from './shared/components/product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [RouterModule, ProductList, ProductDetail, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('assessment-poshan');
}
