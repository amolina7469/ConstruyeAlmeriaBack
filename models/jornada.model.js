const getAll = () => {
  return db.query('select * from workdays');
}

module.exports = { getAll };