import { getCustomRepository } from 'typeorm';
import Data from '../models/Data';
import DataRepository from '../repositories/DataRepository';

interface RequestDTO {
  acc: number[];
  gyro: number[];
  countSteps: number;
}

class CreateDataService {
  public async execute({ acc, gyro, countSteps }: RequestDTO): Promise<Data> {
    const dataRepository = getCustomRepository(DataRepository);

    const data = dataRepository.create({
      acc,
      gyro,
      countSteps,
    });

    await dataRepository.save(data);

    return data;
  }
}
export default CreateDataService;
