const router = require('express').Router();

const {
  getAll,
  createWork,
  deleteWork
} = require('../../models/obra.model');

router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const result = await createWork(req.body);
    console.log(result[0]);
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});

router.put('/id', async (req, res) => {
  console.log(req.query);
  try {
    const result = await deleteWork(req.query);
    console.log(result[0]);
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = router;