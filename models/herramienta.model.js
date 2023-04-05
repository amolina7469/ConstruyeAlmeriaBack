const getAll = () => {
  return db.query('select * from tools');
}

module.exports = { getAll };