import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

// IsString, etc son llamadas validaciones para hacer mas concreto el campo deseado
export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly carrera: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly edad: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly matricula: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

// el signo de interrogacion es para decir que los atributos quedan de forma opcional
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
