import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status';
import { ApiProperty } from '@nestjs/swagger';

export class GetTasksFilterDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  search?: string;
}
