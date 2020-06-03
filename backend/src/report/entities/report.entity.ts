import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FoodType } from '../dto/createReport.dto';
import { ReportTime } from './reportTime.entity';
import { User } from './user.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn('uuid')
  reportId: string;

  @Column()
  foodName: string;

  @Column()
  duckLocation: string;

  @Column()
  duckCount: number;

  @Column()
  foodType: FoodType;

  @Column()
  foodQuantity: number;

  @Column()
  reportDate: string;

  @OneToOne(
    () => ReportTime,
    reportTime => reportTime.reportTimeId,
  )
  reportTime: ReportTime;

  @ManyToOne(
    () => User,
    user => user.userId,
    {
      onDelete: 'CASCADE',
    },
  )
  user: User;
}
