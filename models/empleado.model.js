const getAll = () => {
  return db.query('select * from workers where workers.isActivated = 1');
}

const workerById = ({ id }) => {
  return db.query('select * from workers where workers.id=?', [id])
}
const createWorker = ({ name, surname }) => {
  return db.query('INSERT INTO workers (name, surname) VALUES (?,?)', [name, surname]);
}

const editWorker = ({ name, surname, id }) => {
  return db.query('UPDATE workers SET name = ?, surname = ? WHERE id = ?', [name, surname, id]);
}

const deleteWorker = ({ id }) => {
  return db.query('UPDATE construye.workers SET workers.isActivated = 0 WHERE id=?', [id])
}


// const deleteWorker = ({ id }) => {
//   return db.query('delete from workers where id=?', [id])
// }

module.exports = {
  getAll,
  workerById,
  createWorker,
  editWorker,
  deleteWorker
};