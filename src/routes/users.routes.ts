import { getCustomRepository } from 'typeorm';
import { Router } from 'express';

import CreateDataService from '../services/CreateDataService';
import DataRepository from '../repositories/DataRepository';

const dataRouter = Router();

dataRouter.get('/', async (req, res) => {
  const dataRepository = getCustomRepository(DataRepository);
  const data = await dataRepository.find();

  return res.json(data);
});

dataRouter.post('/', async (req, res) => {
  try {
    const { acc, gyro, countSteps } = req.body;

    const createData = new CreateDataService();

    const data = await createData.execute({
      acc,
      gyro,
      countSteps,
    });

    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default dataRouter;
