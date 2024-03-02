import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controller/products.controller';
import { CategoriesController } from './controller/categories.controller';
import { ProductsService } from './services/products.service';
import { BrandsController } from './controller/brands.controller';
import { UsersController } from './controller/users.controller';
import { CustomersController } from './controller/customers.controller';
import { BrandsService } from './services/brands.service';
import { UsersService } from './services/users.service';
import { CustomersService } from './services/customers.service';


@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, BrandsController, UsersController, CustomersController],
  providers: [AppService, ProductsService, BrandsService, UsersService, CustomersService],
})
export class AppModule {}
