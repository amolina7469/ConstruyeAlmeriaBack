const router = require('express').Router();

const {
  getAll,
  getActives,
  clientById,
  editClient,
  activeClient,
  createClient,
  deleteClient
} = require('../../models/cliente.model');

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
    const [result] = await clientById(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});

router.patch('/', async (req, res) => {
  console.log(req.body);
  try {
    const result = await editClient(req.body);
    console.log(result[0]);
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await createClient(req.body);
    console.log(result[0]);
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});

router.put('/id', async (req, res) => {
  console.log(req.query);
  try {
    const result = await deleteClient(req.query);
    console.log(result[0]);
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});

router.put('/activar', async (req, res) => {
  ids = req.body.join(',');
  try {
    const [result] = await activeClient(ids);
    res.json(result)
  } catch (err) {
    res.json({ fatal: err.message });
  }
});


module.exports = router;