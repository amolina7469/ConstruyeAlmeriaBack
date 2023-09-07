const getAll = () => {
  return db.query('select * from workers');
}

const createWorker = ({ name, surname }) => {
  return db.query('INSERT INTO workers (name, surname) VALUES (?,?)', [name, surname]);
}

const deleteWorker = ({ id }) => {
  return db.query('delete from workers where id=?', [id])
}

module.exports = {
  getAll,
  createWorker,
  deleteWorker
};