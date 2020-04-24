import { EntityRepository, Repository } from 'typeorm';
import Data from '../models/Data';

@EntityRepository(Data)
class DataRepository extends Repository<Data> {}
export default DataRepository;
