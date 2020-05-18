import { getCustomRepository } from 'typeorm';
import { Router } from 'express';

import CreateDataService, { RequestDTO } from '../services/CreateDataService';

import DataRepository from '../repositories/DataRepository';
import ReceivedData from '../models/ReceivedData';

const dataRouter = Router();

dataRouter.get('/', async (req, res) => {
  const dataRepository = getCustomRepository(DataRepository);
  const data = await dataRepository.find();

  return res.json(data);
});

dataRouter.post('/', async (req, res) => {
  try {
    const dados = req.body as ReceivedData;

    const createData = new CreateDataService();

    const p = new RequestDTO();

    for (let i = 0; i < dados.qty; i++) {
      p.acc1 = dados.acc1[i];
      p.acc2 = dados.acc2[i];
      p.acc3 = dados.acc3[i];
      p.gyro1 = dados.gyro1[i];
      p.gyro2 = dados.gyro2[i];
      p.gyro3 = dados.gyro3[i];
      p.countSteps = dados.countSteps[i];
      p.date = new Date(dados.timestamp[i]);
      await createData.execute(p);
    }

    res.status(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default dataRouter;
