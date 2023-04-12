const getAll = () => {
  return db.query('select * from users');
}

const getByEmail = (email) => {
  return db.query('select * from  users where email = ?', [email]);
}

module.exports = {
  getAll,
  getByEmail
};