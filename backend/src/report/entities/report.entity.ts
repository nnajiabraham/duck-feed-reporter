import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
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
  duckCount: string;

  @Column()
  foodType: string;

  @Column()
  foodQuantity: string;

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
