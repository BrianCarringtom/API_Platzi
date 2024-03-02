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
import { CreateUserDto, UpdateUserDto } from './../dtos/users.dtos';

import { UsersService } from './../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  //Como recibir parametro tipos Query: http://localhost:3000/products?brand=sa&limit=200/
  @Get()
  getUsers(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.usersService.findAll();
  }

  @Get(':userId')
  @HttpCode(HttpStatus.ACCEPTED)
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    // response.status(200).send({
    //   message: `user ${userId}`,
    // });
    return this.usersService.findOne(+userId);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.usersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this.usersService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: 'Delete action',
      id: this.usersService.delete(+id),
    };
  }
}
