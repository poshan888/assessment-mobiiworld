import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../core/services/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  products: any[] = [];

  constructor(private productService: Product, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = [...data];
      console.log(this.products);
      this.cdr.detectChanges();
    });
  }
}
