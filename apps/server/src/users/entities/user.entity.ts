import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Unique identefier',
  })
  id: string;

  @ApiProperty({ example: 'user@ai-nodeflow.com' })
  email: string;

  @ApiPropertyOptional({ example: 'Олексій', nullable: true })
  name: string | null;

  @ApiProperty({ description: 'Creation time' })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated time' })
  updatedAt: Date;
}
