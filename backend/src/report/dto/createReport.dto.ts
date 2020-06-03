import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export enum FoodType {
  WET_FOOD = 'WET_FOOD',
  DRY_FOOD = 'DRY_FOOD',
}
export class CreateReportDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(FoodType)
  @IsNotEmpty()
  foodType: FoodType;

  @IsNumber()
  @IsNotEmpty()
  foodQuantity: number;

  @IsString()
  @IsNotEmpty()
  duckLocation: string;

  @IsNumber()
  @IsNotEmpty()
  duckCount: number;

  @IsString()
  @IsNotEmpty()
  foodName: string;

  @IsNumber()
  @IsNotEmpty()
  time: number;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsBoolean()
  @IsNotEmpty()
  recurringEvent: boolean;
}
