const router = require('express').Router();

const {
  getAll,
  createWorker,
  deleteWorker
} = require('../../models/empleado.model');

router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await createWorker(req.body);
    console.log(result[0]);
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});

router.delete('/id', async (req, res) => {
  console.log(req.query.id);
  try {
    const result = await deleteWorker(req.query);
    console.log(result[0]);
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = router;