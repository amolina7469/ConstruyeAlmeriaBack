const getAll = () => {
  return db.query('select * from users');
}

const getById = (id) => {
  return db.query('select * from users where users.id =?', [id]);
}

const getByEmail = (email) => {
  return db.query('select * from  users where email = ?', [email]);
}

const regUser = ({ name, surname, email, rol, password }) => {
  return db.query('INSERT INTO users (name, surname, email, role, password) values (?,?,?,?,?)', [name, surname, email, rol, password]);
}

const activeUser = (idString) => {
  return db.query('update users set isActivated = case when isActivated = 0 then 1 when isActivated = 1 then 0 end  where find_in_set(id,?)>0', [idString]);
}

const update = (usuario_id, { newPassword }) => {
  return db.query('update users set password = ? where id = ?', [newPassword, usuario_id]);
}

module.exports = {
  getAll,
  getByEmail,
  getById,
  regUser,
  activeUser,
  update
};