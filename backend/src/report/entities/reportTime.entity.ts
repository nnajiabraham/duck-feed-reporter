import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReportTime {
  @PrimaryGeneratedColumn('uuid')
  reportTimeId: string;

  @Column()
  feedTime: number;

  @Column()
  isRecurring: boolean;
}
