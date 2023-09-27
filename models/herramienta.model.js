const getAll = () => {
  return db.query('select * from tools where tools.isActivated = 1');
}

const toolById = ({ id }) => {
  return db.query('select * from tools where tools.id=?', [id])
}

const createTool = ({ name, description, price }) => {
  return db.query('INSERT INTO tools (name, description, price) VALUES (?,?,?)', [name, description, price]);
}

const editTool = ({ name, description, price, id }) => {
  return db.query('UPDATE tools SET name = ?, description = ?, price = ? WHERE id = ?', [name, description, price, id]);
}

// const deleteTool = ({ id }) => {
//   return db.query('delete from tools where id=?', [id])
// }

const deleteTool = ({ id }) => {
  return db.query('UPDATE construye.tools SET tools.isActivated = 0 WHERE id =?', [id])
}

module.exports = {
  getAll,
  toolById,
  editTool,
  createTool,
  deleteTool
};