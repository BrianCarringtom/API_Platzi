import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from './../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from './../dtos/brands.dtos';

@Injectable()
export class BrandsService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  private couterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      brand: 'nike',
      description: 'el mejor producto',
      color: 'Azul',
      image: '',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((item) => item.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }

  create(payload: CreateBrandDto) {
    console.log(payload);
    this.couterId = this.couterId + 1;
    const newBrand = {
      id: this.couterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto) {
    const brand = this.findOne(id);
    if (brand) {
      const index = this.brands.findIndex((item) => item.id === id);
      this.brands[index] = {
        ...brand,
        ...payload,
      };
      return this.brands[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) throw new NotFoundException(`Brand #${id} not found`);
    this.brands.splice(index, 1);
    return id;
  }
}
