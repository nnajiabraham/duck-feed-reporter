import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './entities/report.entity';
import { ReportTime } from './entities/reportTime.entity';
import { User } from './entities/user.entity';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Report, ReportTime])],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
