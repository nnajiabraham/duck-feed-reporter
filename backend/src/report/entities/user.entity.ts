import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Report } from './report.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column()
  name: string;

  @Column()
  @Unique(['email'])
  email: string;

  @OneToMany(
    () => Report,
    report => report.reportId,
  )
  reports: Report[];
}
