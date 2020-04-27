import { getCustomRepository } from 'typeorm';
import Data from '../models/Data';
import DataRepository from '../repositories/DataRepository';

export class RequestDTO {
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
  public async execute(p: RequestDTO): Promise<Data> {
    const dataRepository = getCustomRepository(DataRepository);

    const data = dataRepository.create(p);

    await dataRepository.save(data);

    return data;
  }
}
export default CreateDataService;
