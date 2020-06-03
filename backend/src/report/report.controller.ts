import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { CreateReportDTO } from './dto/createReport.dto';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
  async saveReport(@Body() payload: CreateReportDTO) {
    try {
      return await this.reportService.saveReport(payload);
    } catch (e) {
      console.error('Error occurred saving report ', e);
      throw new InternalServerErrorException('Unable to save report');
    }
  }
}
