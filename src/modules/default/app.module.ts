import { Module } from '@nestjs/common';
import { TasksModule } from '../tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import config from '../../shared/config/ormconfig';

@Module({
  imports: [
    TasksModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      synchronize: true, //it will alls keep yout schema sync
      autoLoadEntities: true, //always let this with true and use entitie convencional
    }),
  ],
})
export class AppModule {}
