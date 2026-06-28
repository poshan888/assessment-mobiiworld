import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../core/services/product';
import { CommonModule, JsonPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { ProductCard } from '../../shared/components/product-card/product-card';

@Component({
  selector: 'app-product-detail',
  imports: [JsonPipe, CommonModule, ProductCard],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private productService = inject(Product);
  private route = inject(ActivatedRoute);

  product = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id')!),
      switchMap(id => this.productService.getProductById(id))
    )
  );

  products = toSignal(inject(Product).getProducts(), { initialValue: [] });
}
