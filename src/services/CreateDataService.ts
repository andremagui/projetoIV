import { getCustomRepository } from 'typeorm';
import Data from '../models/Data';
import DataRepository from '../repositories/DataRepository';

interface RequestDTO {
  acc1: number;
  acc2: number;
  acc3: number;
  gyro1: number;
  gyro2: number;
  gyro3: number;
  countSteps: number;
  date: Date;
}

class CreateDataService {
  public async execute({
    acc1,
    acc2,
    acc3,
    gyro1,
    gyro2,
    gyro3,
    countSteps,
    date,
  }: RequestDTO): Promise<Data> {
    const dataRepository = getCustomRepository(DataRepository);

    const data = dataRepository.create({
      acc1,
      acc2,
      acc3,
      gyro1,
      gyro2,
      gyro3,
      countSteps,
      date,
    });

    await dataRepository.save(data);

    return data;
  }
}
export default CreateDataService;
