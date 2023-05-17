const router = require('express').Router();

const {
  createDaily,
  addTools,
  addWorkers,
  getDailyById,
  // addWorkday,
  getLastDailys
} = require('../../models/parte.model');

router.get('/last', async (req, res) => {
  try {
    const [result] = await getLastDailys(req.query);
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
})

router.get('/id', async (req, res) => {
  const { id } = req.query;
  try {
    const [result] = await getDailyById(id);
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
})

router.post('/', async (req, res) => {
  console.log(req.body);
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
        console.log(worker.id);
        await addWorkers(worker.id, dailyId, worker.jornada);
        // await addWorkday(worker.id, worker.jornada);
      }
    }
  } catch (err) {
    res.json(err.message);
  }
})


module.exports = router;