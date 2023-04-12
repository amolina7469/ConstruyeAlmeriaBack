const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const createToken = (usuario) => {
  const obj = {
    user_id: usuario.id,
    exp: dayjs().add(4, 'weeks').unix()
  }
  return jwt.sign(obj, process.env.SECRET_KEY);
};


module.exports = {
  createToken
}