const getAll = () => {
  return db.query('select * from clients');
}

const createClient = ({ name, surname, email }) => {
  return db.query('INSERT INTO clients (name, surname, email) VALUES (?,?,?)', [name, surname, email]);
}

const deleteClient = ({ id }) => {
  return db.query('delete from clients where id=?', [id])
}

module.exports = {
  getAll,
  createClient,
  deleteClient
};