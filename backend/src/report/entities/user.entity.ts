import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Report } from './report.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(
    () => Report,
    report => report.reportId,
  )
  reports: Report[];
}
