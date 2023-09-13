const getAll = () => {
  return db.query('select * from clients where clients.isActivated = 1');
}

const createClient = ({ name, surname, email }) => {
  return db.query('INSERT INTO clients (name, surname, email) VALUES (?,?,?)', [name, surname, email]);
}

const deleteClient = ({ id }) => {
  return db.query('update construye.clients set clients.isActivated = 0 where id=?', [id])
}

// const deleteClient = ({ id }) => {
//   return db.query('delete from clients where id=?', [id])
// }


module.exports = {
  getAll,
  createClient,
  deleteClient
};