const getAll = () => {
  return db.query('select * from tools');
}

const createTool = ({ name, description, price }) => {
  return db.query('INSERT INTO tools (name, description, price) VALUES (?,?,?)', [name, description, price]);
}

const deleteTool = ({ id }) => {
  return db.query('delete from tools where id=?', [id])
}

module.exports = {
  getAll,
  createTool,
  deleteTool
};