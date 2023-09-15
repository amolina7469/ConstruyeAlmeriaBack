const router = require('express').Router();

const {
  getAll,
  createWork,
  deleteWork,
  workById,
  editWork
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

router.get('/id', async (req, res) => {
  try {
    const [result] = await workById(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});

router.patch('/', async (req, res) => {
  try {
    const result = await editWork(req.body);
    console.log(result[0]);
    res.json(result[0]);
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