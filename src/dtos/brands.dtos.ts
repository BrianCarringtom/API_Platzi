import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

// IsString, etc son llamadas validaciones para hacer mas concreto el campo deseado
export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly brand: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly color: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

// el signo de interrogacion es para decir que los atributos quedan de forma opcional
export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
