const getAll = () => {
  return db.query('select * from workers');
}

const getActives = () => {
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

const activeWorker = (idString) => {
  return db.query('update workers set isActivated = case when isActivated = 0 then 1 when isActivated = 1 then 0 end  where find_in_set(id,?)>0', [idString]);
}

// const deleteWorker = ({ id }) => {
//   return db.query('delete from workers where id=?', [id])
// }

module.exports = {
  getAll,
  getActives,
  workerById,
  createWorker,
  activeWorker,
  editWorker,
  deleteWorker
};