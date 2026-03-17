import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@ai-nodeflow.com',
    description: "User's email",
  })
  @IsEmail({}, { message: 'Incorrect email address format' })
  email: string;

  @ApiProperty({
    example: 'Tom',
    description: "User's name (optional)",
  })
  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'The name must contain at least 3 characters' })
  name?: string;
}
