const router = require('express').Router();

const {
  getAll,
  createTool,
  deleteTool,
  toolById,
  editTool
} = require('../../models/herramienta.model');

router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
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

// router.delete('/id', async (req, res) => {
//   console.log(req.query.id);
//   try {
//     const result = await deleteTool(req.query);
//     console.log(result[0]);
//     res.json(result[0]);
//   } catch (err) {
//     res.json(err.message);
//   }
// });


module.exports = router;