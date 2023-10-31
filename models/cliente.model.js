const getAll = () => {
  return db.query('select * from clients');
}

const getActives = () => {
  return db.query('select * from clients where clients.isActivated = 1');
}

const clientById = ({ id }) => {
  return db.query('select * from clients where clients.id=?', [id])
}

const createClient = ({ name, surname, email }) => {
  return db.query('INSERT INTO clients (name, surname, email) VALUES (?,?,?)', [name, surname, email]);
}

const editClient = ({ name, surname, email, id }) => {
  return db.query('UPDATE clients SET name = ?, surname = ?, email = ? WHERE id = ?', [name, surname, email, id]);
}

const deleteClient = ({ id }) => {
  return db.query('update construye.clients set clients.isActivated = 0 where id=?', [id])
}

const activeClient = (idString) => {
  return db.query('update clients set isActivated = case when isActivated = 0 then 1 when isActivated = 1 then 0 end  where find_in_set(id,?)>0', [idString]);
}
// const deleteClient = ({ id }) => {
//   return db.query('delete from clients where id=?', [id])
// }


module.exports = {
  getAll,
  getActives,
  clientById,
  editClient,
  activeClient,
  createClient,
  deleteClient
};