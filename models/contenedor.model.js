const getAll = () => {
  return db.query('select * from containers');
}

module.exports = { getAll };