const getAll = () => {
  return db.query('select * from workers where workers.isActivated = 1');
}

const createWorker = ({ name, surname }) => {
  return db.query('INSERT INTO workers (name, surname) VALUES (?,?)', [name, surname]);
}

const deleteWorker = ({ id }) => {
  return db.query('update construye.workers set workers.isActivated = 0 where id=?', [id])
}


// const deleteWorker = ({ id }) => {
//   return db.query('delete from workers where id=?', [id])
// }

module.exports = {
  getAll,
  createWorker,
  deleteWorker
};