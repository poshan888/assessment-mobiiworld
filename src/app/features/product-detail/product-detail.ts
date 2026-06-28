import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../core/services/product';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [JsonPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  productId!: string;
  product: any;
  constructor(private route: ActivatedRoute, private productService:Product) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')!;

    console.log(this.productId);
    this.productService
      .getProductById(this.productId)
      .subscribe((data:any) =>{
      this.product=data;
        console.log("selected Product: ", this.product);
        
      });
  }
  
    
  
    
}
