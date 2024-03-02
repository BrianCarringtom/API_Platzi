import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  // ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';

import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';

import { ProductsService } from './../services/products.service';

//Aqui ya sabemos que la ruta principal inicia en products
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  //Como recibir parametro tipos Query: http://localhost:3000/products?brand=sa&limit=200/
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }

  //Siempre poner primero los controladores no dinamicos, porque si no no jalaria
  @Get('filter')
  getFilter() {
    return {
      message: `Yo soy Filter`,
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: 'Delete action',
      id: this.productsService.delete(+id),
    };
  }
}
