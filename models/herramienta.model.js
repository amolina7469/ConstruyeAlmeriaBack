const getAll = () => {
  return db.query('select * from tools');
}

const getActives = () => {
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

const deleteTool = ({ id }) => {
  return db.query('UPDATE construye.tools SET tools.isActivated = 0 WHERE id =?', [id])
}

const activeTool = (idString) => {
  return db.query('update tools set isActivated = case when isActivated = 0 then 1 when isActivated = 1 then 0 end  where find_in_set(id,?)>0', [idString]);
}
module.exports = {
  getAll,
  getActives,
  toolById,
  editTool,
  activeTool,
  createTool,
  deleteTool
};