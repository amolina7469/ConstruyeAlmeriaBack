const getAll = () => {
  return db.query('select * from users');
}

module.exports = { getAll };