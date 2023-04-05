const router = require('express').Router();

const {
  createDaily,
  addTools,
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

router.post('/', async (req, res) => {
  try {
    const result = await createDaily(req.body);
    dailyId = result[0].insertId;
    if (req.body.tool.length > 0) {
      for (let tool of req.body.tool) {
        await addTools(tool.id, dailyId)
      }
    }
  } catch (err) {
    res.json(err.message);
  }
})





module.exports = router;

module.exports = router;