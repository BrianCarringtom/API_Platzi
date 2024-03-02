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
import { CreateBrandDto, UpdateBrandDto } from './../dtos/brands.dtos';

import { BrandsService } from './../services/brands.service';

@Controller('brands')
export class BrandsController {
    constructor(private brandsService: BrandsService) {}

  //Como recibir parametro tipos Query: http://localhost:3000/products?brand=sa&limit=200/
  @Get()
  getBrands(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `brands: limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.brandsService.findAll();
  }

  @Get(':brandId')
  @HttpCode(HttpStatus.ACCEPTED)
  getBrand(@Param('brandId', ParseIntPipe) brandId: number) {
    // response.status(200).send({
    //   message: `brand ${brandtId}`,
    // });
    return this.brandsService.findOne(+brandId);
  }

  @Post()
  create(@Body() payload: CreateBrandDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.brandsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateBrandDto) {
    return this.brandsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: 'Delete action',
      id: this.brandsService.delete(+id),
    };
  }
}
