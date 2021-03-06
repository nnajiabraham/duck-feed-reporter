import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Report } from './report/entities/report.entity';
import { ReportTime } from './report/entities/reportTime.entity';
import { User } from './report/entities/user.entity';
import { ReportModule } from './report/report.module';
@Module({
  imports: [
    ReportModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.NODE_ENV === 'development' ? 'localhost' : 'mysqldb',
      port: process.env.NODE_ENV === 'development' ? 3305 : 3306,
      username: 'root',
      password: 'some_super_secret_strong_password',
      database: 'duck_report',
      entities: [User, Report, ReportTime],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
