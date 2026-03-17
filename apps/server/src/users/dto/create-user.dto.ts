import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Incorrect email address format' })
  email: string;

  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'The name must contain at least 3 characters' })
  name?: string;
}
