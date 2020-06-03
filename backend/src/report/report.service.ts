import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateReportDTO } from './dto/createReport.dto';
import { Report } from './entities/report.entity';
import { ReportTime } from './entities/reportTime.entity';
import { User } from './entities/user.entity';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Report)
    private reportRepo: Repository<Report>,
    @InjectRepository(ReportTime)
    private reportTimeRepo: Repository<ReportTime>,
  ) {}

  async saveReport(payload: CreateReportDTO) {
    const prevSavedUser = await this.userRepo.findOne({
      where: { email: Like(payload.email) },
    });

    const newReport = new Report();
    const newReportTime = new ReportTime();

    if (prevSavedUser?.email === payload.email) {
      newReport.duckCount = payload.duckCount;
      newReport.duckLocation = payload.duckLocation;
      newReport.foodName = payload.foodName;
      newReport.foodQuantity = payload.foodQuantity;
      newReport.foodType = payload.foodType;
      newReport.user = prevSavedUser;

      await this.reportRepo.save(newReport);

      newReportTime.feedTime = payload.time;
      newReportTime.isRecurring = payload.recurringEvent;

      await this.reportTimeRepo.save(newReportTime);

      return { ...newReport, ...newReportTime };
    }

    const newUser = new User();
    newUser.name = payload.name;
    newUser.email = payload.email;

    await this.userRepo.save(newUser);

    newReport.duckCount = payload.duckCount;
    newReport.duckLocation = payload.duckLocation;
    newReport.foodName = payload.foodName;
    newReport.foodQuantity = payload.foodQuantity;
    newReport.foodType = payload.foodType;
    newReport.user = newUser;

    await this.reportRepo.save(newReport);

    newReportTime.feedTime = payload.time;
    newReportTime.isRecurring = payload.recurringEvent;

    await this.reportTimeRepo.save(newReportTime);

    return { ...newReport, ...newReportTime };
  }
}
