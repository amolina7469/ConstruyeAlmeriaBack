const router = require('express').Router();
const { createToken } = require('../../helpers/utils');
const bcrypt = require('bcrypt');
const {
  getAll
} = require('../../models/usuario.model');

router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const [result] = await getByEmail(email);
  if (result.length === 0) {
    return res.json({ fatal: 'Error en email y/o contraseña' });
  }
  const usuario = result[0];
  const iguales = bcrypt.compareSync(password, usuario.Password);
  if (!iguales) {
    return res.json({ fatal: 'Error en email y/o contraseña' });
  }
  res.json({
    success: 'Login correcto',
    token: createToken(usuario)
  });
});

module.exports = router;