// import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('data')
class Data {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  acc1: number;

  @Column()
  acc2: number;

  @Column()
  acc3: number;

  @Column()
  gyro1: number;

  @Column()
  gyro2: number;

  @Column()
  gyro3: number;

  @Column()
  countSteps: number;

  @Column()
  date: Date;
}
export default Data;
