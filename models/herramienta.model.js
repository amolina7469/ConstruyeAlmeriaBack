const getAll = () => {
  return db.query('select * from tools where tools.isActivated = 1');
}

const createTool = ({ name, description, price }) => {
  return db.query('INSERT INTO tools (name, description, price) VALUES (?,?,?)', [name, description, price]);
}

// const deleteTool = ({ id }) => {
//   return db.query('delete from tools where id=?', [id])
// }

const deleteTool = ({ id }) => {
  return db.query('UPDATE construye.tools SET tools.isActivated = 0 WHERE id =?', [id])
}

module.exports = {
  getAll,
  createTool,
  deleteTool
};