import { getCustomRepository } from 'typeorm';
import { Router } from 'express';

import CreateDataService from '../services/CreateDataService';
import { RequestDTO } from '../services/CreateDataService';
import DataRepository from '../repositories/DataRepository';

const dataRouter = Router();

dataRouter.get('/', async (req, res) => {
  const dataRepository = getCustomRepository(DataRepository);
  const data = await dataRepository.find();

  return res.json(data);
});

dataRouter.post('/', async (req, res) => {
  try {
    const dados = req.body as any[][];

    const createData = new CreateDataService();

    const p = new RequestDTO();

    for (let i = 0; i < dados.length; i++) {
      const dado = dados[i];
      p.acc1 = dado[0];
      p.acc2 = dado[1];
      p.acc3 = dado[2];
      p.gyro1 = dado[3];
      p.gyro2 = dado[4];
      p.gyro3 = dado[5];
      p.countSteps = dado[6];
      p.date = dado[7];
      await createData.execute(p);
    }

    res.status(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default dataRouter;
