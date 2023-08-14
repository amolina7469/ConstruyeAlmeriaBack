const getAll = () => {
  return db.query('select * from clients');
}

module.exports = { getAll };