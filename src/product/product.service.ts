import { Injectable } from '@nestjs/common';
import { Product } from 'src/interface/product.interface';

@Injectable()
export class ProductService {
    private readonly products: Product []= []
    create (product: Product){
        this.products.push(product)
    }

    finAll(): Product[] {
        return this.products
    }
}
