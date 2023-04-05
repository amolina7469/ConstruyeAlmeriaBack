const getAll = () => {
  return db.query('select * from workers');
}

module.exports = { getAll };