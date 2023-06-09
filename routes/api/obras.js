const router = require('express').Router();

const {
  getAll
} = require('../../models/obra.model');

router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = router;