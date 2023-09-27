const getAll = () => {
  return db.query('select * from users');
}

const getByEmail = (email) => {
  return db.query('select * from  users where email = ?', [email]);
}

const regUser = ({ name, surname, email, rol, password }) => {
  return db.query('INSERT INTO users (name, surname, email, role, password) values (?,?,?,?,?)', [name, surname, email, rol, password]);
}

module.exports = {
  getAll,
  getByEmail,
  regUser
};