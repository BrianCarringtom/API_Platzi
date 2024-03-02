import { Controller, Get, Param } from '@nestjs/common';

//Aqui ya sabemos que la ruta principal inica en categories
@Controller('categories')
export class CategoriesController {
  //para recibir dos parametros con identificador en una sola ruta
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }

  @Get('carringtom')
  getCarringtom() {
    return `Yo soy Brian Isaac Carringtom`;
  }
}
