const router = require('express').Router();
const { createToken } = require('../../helpers/utils');
const { sendMail } = require('../../helpers/sendmail');
const bcrypt = require('bcrypt');

const {
  getAll,
  getByEmail,
  regUser,
  update
} = require('../../models/usuario.model');

router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});

router.get('/email', async (req, res) => {
  const { email } = req.query;
  try {
    const [result] = await getByEmail(email);
    res.json(result[0]);
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
  console.log(usuario.password, password);
  const iguales = bcrypt.compareSync(password, usuario.password);
  console.log(iguales);
  if (!iguales) {
    return res.json({ fatal: 'Error en email y/o contraseñassssss' });
  }
  res.json({
    success: 'Login correcto',
    token: createToken(usuario),
    rol: usuario.role
  });
});

router.post('/registro', async (req, res) => {
  console.log(req.body);
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  try {
    const [result] = await regUser(req.body);
    res.json(result);
  } catch (err) {
    res.json({ fatal: 'err.message' });
  }
});

router.post('/forget', async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  const [result] = await getByEmail(email);
  if (result.length === 0) {
    return res.json({ fatal: 'Error en email' });
  }
  sendMail(email);
  res.json({
    success: 'Correo enviado',
    email: email
  });
});

router.put('/reset', async (req, res) => {
  console.log(req.body);
  const { email, newPassword } = req.body;
  const [result] = await getByEmail(email);
  if (result.length === 0) {
    return res.json({ fatal: 'Error en email y/o contraseña' });
  }
  const usuario = result[0];
  console.log(usuario);
  req.body.newPassword = bcrypt.hashSync(newPassword, 8);
  try {
    const [result] = await update(usuario.id, req.body);
    res.json(result);
  } catch (err) {
    res.json({ fatal: err.message });
  }
});

module.exports = router;