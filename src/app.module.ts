import { Module } from '@nestjs/common'; 
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './typeorm';
import { AuthModule } from './auth/auth.module';
 
@Module({
  imports: [CustomersModule, UsersModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    entities: entities,
    synchronize: true,
  }), AuthModule],
  controllers: [], 
  providers: [],
})
export class AppModule {}

