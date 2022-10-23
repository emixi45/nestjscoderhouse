import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import { Product } from 'src/interface/product.interface';


@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductService){}

        @Post()
        async create(@Body() createProductDTO: CreateProductDTO){
            this.productsService.create(createProductDTO)
        }
        @Get()
        async findAll(): Promise<Product [] > {
            return this.productsService.finAll()
        }
        
    
}
