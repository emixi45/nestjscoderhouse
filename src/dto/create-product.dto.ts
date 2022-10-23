import {ApiProperty} from '@nestjs/swagger';


export class CreateProductDTO {
    @ApiProperty()
    readonly name: String
    
    @ApiProperty()
    readonly price: String
    
    @ApiProperty()
    readonly description: String
    
}