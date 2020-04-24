// import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('data')
class Data {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  acc: number[];

  @Column()
  gyro: number[];

  @Column()
  countSteps: number;
}
export default Data;
