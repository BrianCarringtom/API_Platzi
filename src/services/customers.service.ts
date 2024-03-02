import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from './../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from './../dtos/customers.dtos';

@Injectable()
export class CustomersService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  private couterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Isaac',
      carrera: 'LIDTS',
      edad: 20,
      matricula: 210218,
      image: '',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  create(payload: CreateCustomerDto) {
    console.log(payload);
    this.couterId = this.couterId + 1;
    const newCustomer = {
      id: this.couterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findOne(id);
    if (customer) {
      const index = this.customers.findIndex((item) => item.id === id);
      this.customers[index] = {
        ...customer,
        ...payload,
      };
      return this.customers[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) throw new NotFoundException(`Customer #${id} not found`);
    this.customers.splice(index, 1);
    return id;
  }
}
