const router = require('express').Router();
const { createObject } = require('../../helpers/createobject');

const {
  createDaily,
  addTools,
  addWorkers,
  getDailyById,
  getWorkdayById,
  getLastDailys,
  getFilterWorks,
  getFilterClients,
  deleteById
} = require('../../models/parte.model');

router.get('/last', async (req, res) => {
  try {
    const [result] = await getLastDailys(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
})

router.get('/filter', async (req, res) => {
  try {
    console.log("filter", req.query);
    if (req.query.seleccion === '1') {
      const [result] = await getFilterClients(req.query);
      res.json(result);
    }
    else if (req.query.seleccion === '2') {
      const [result] = await getFilterWorks(req.query);
      res.json(result);
    }
  } catch (err) {
    res.json(err.message);
  }
})

router.get('/id', async (req, res) => {
  const { id } = req.query;
  try {
    const [result] = await getDailyById(id);
    result[0].tools = await createObject(result[0].tools.split(","), "tools", id);
    result[0].workers = await createObject(result[0].workers.split(","), "workers", id);
    if (result[0].workers.length > 0) {
      for (let worker of result[0].workers) {
        const [jornada] = await getWorkdayById(worker.jornada);
        worker.jornada = jornada[0].day;
      }
    }
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
})

router.post('/', async (req, res) => {
  try {
    const result = await createDaily(req.body);
    dailyId = result[0].insertId;
    if (req.body.tool.length > 0) {
      for (let tool of req.body.tool) {
        await addTools(tool.id, dailyId);
      }
    }
    if (req.body.worker.length > 0) {
      for (let worker of req.body.worker) {
        await addWorkers(worker.id, dailyId, worker.jornada);
      }
    }
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
})

router.delete('/id', async (req, res) => {
  const { id } = req.query;
  try {
    const result = await deleteById(id);
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});



module.exports = router;