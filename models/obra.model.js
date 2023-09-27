const getAll = () => {
  return db.query('select works.id, address,client_id,km,pricekm,works.isActivated,name,surname,email from works inner join clients on clients.id = client_id where works.isActivated = 1');
}

const workById = ({ id }) => {
  return db.query('select * from works where works.id=?', [id])
}

const createWork = ({ address, client }) => {
  return db.query('insert into works (address,client_id) values (?,?)', [address, client]);
}

const editWork = ({ address, client, km, pricekm, id }) => {
  return db.query('UPDATE works SET address = ?, client_id = ?, km = ?, pricekm = ? WHERE id = ?', [address, client, km, pricekm, id]);
}

const deleteWork = ({ id }) => {
  return db.query('update construye.works set works.isActivated = 0 where id=?', [id])
}


module.exports = {
  getAll,
  workById,
  editWork,
  createWork,
  deleteWork
};