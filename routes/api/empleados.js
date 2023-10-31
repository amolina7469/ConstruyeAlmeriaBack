const router = require('express').Router();

const {
  getAll,
  getActives,
  workerById,
  editWorker,
  activeWorker,
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

router.get('/active', async (req, res) => {
  try {
    const [result] = await getActives();
    console.log(result)
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});

router.get('/id', async (req, res) => {
  try {
    const [result] = await workerById(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});

router.patch('/', async (req, res) => {
  try {
    const result = await editWorker(req.body);
    console.log(result[0]);
    res.json(result[0]);
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

router.put('/id', async (req, res) => {
  console.log(req.query);
  try {
    const result = await deleteWorker(req.query);
    console.log(result[0]);
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});

router.put('/activar', async (req, res) => {
  ids = req.body.join(',');
  try {
    const [result] = await activeWorker(ids);
    res.json(result)
  } catch (err) {
    res.json({ fatal: err.message });
  }
});


module.exports = router;