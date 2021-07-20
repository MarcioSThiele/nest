import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskStatusDto {
  @ApiProperty()
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
