import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  @IsNotEmpty()
  userName: string;

  @ApiProperty()
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  @IsNotEmpty()
  // @Matches(/((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message: 'Your password is too weak. Try again with strong password',
  // })
  password: string;
}
