const getAll = () => {
  return db.query('select * from works');
}

module.exports = { getAll };