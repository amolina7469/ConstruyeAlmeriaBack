const getAll = () => {
  return db.query('select * from vehicles');
}

module.exports = { getAll };