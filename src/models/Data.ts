// import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('data')
class Data {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @Column("float")
  acc1: number;

  @Column("float")
  acc2: number;

  @Column("float")
  acc3: number;

  @Column("float")
  gyro1: number;

  @Column("float")
  gyro2: number;

  @Column("float")
  gyro3: number;

  @Column("int")
  countSteps: number;

  @Column("datetime")
  date: Date;
}
export default Data;
