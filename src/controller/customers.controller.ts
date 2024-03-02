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
import { CreateCustomerDto, UpdateCustomerDto } from './../dtos/customers.dtos';

import { CustomersService } from './../services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  //Como recibir parametro tipos Query: http://localhost:3000/products?brand=sa&limit=200/
  @Get()
  getCustomers(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.customersService.findAll();
  }

  @Get(':customerId')
  @HttpCode(HttpStatus.ACCEPTED)
  getCustomer(@Param('customerId', ParseIntPipe) customertId: number) {
    // response.status(200).send({
    //   message: `customer ${customertId}`,
    // });
    return this.customersService.findOne(+customertId);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateCustomerDto) {
    return this.customersService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: 'Delete action',
      id: this.customersService.delete(+id),
    };
  }
}
