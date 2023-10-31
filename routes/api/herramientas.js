const router = require('express').Router();

const {
  getAll,
  getActives,
  createTool,
  deleteTool,
  toolById,
  editTool,
  activeTool
} = require('../../models/herramienta.model');

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
    const [result] = await toolById(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});

router.patch('/', async (req, res) => {
  try {
    const result = await editTool(req.body);
    console.log(result[0]);
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await createTool(req.body);
    console.log(result[0]);
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});

router.put('/id', async (req, res) => {
  try {
    const result = await deleteTool(req.query);
    console.log(result[0]);
    res.json(result[0]);
  } catch (err) {
    res.json(err.message);
  }
});

router.put('/activar', async (req, res) => {
  ids = req.body.join(',');
  try {
    const [result] = await activeTool(ids);
    res.json(result)
  } catch (err) {
    res.json({ fatal: err.message });
  }
});


module.exports = router;