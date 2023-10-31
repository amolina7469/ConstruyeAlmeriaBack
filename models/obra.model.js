const getAll = () => {
  return db.query('select  works.id, address,client_id,km,pricekm,works.isActivated,name,surname,email from works inner join clients on clients.id = client_id');
}

const getActives = () => {
  return db.query('select works.id, address,client_id,km,pricekm,works.isActivated,name,surname,email from works inner join clients on clients.id = client_id where works.isActivated = 1');
}

const workById = ({ id }) => {
  return db.query('select clients.id as client,address, name, surname,email,km,pricekm from works inner join clients on clients.id = client_id where works.id=?', [id])
}

const createWork = ({ address, client, km }) => {
  return db.query('insert into works (address,client_id,km) values (?,?,?)', [address, client, km]);
}

const editWork = ({ address, client, km, pricekm, id }) => {
  return db.query('UPDATE works SET address = ?, client_id = ?, km = ?, pricekm = ? WHERE id = ?', [address, client, km, pricekm, id]);
}

const deleteWork = ({ id }) => {
  return db.query('update construye.works set works.isActivated = 0 where id=?', [id])
}

const activeWork = (idString) => {
  return db.query('update works set isActivated = case when isActivated = 0 then 1 when isActivated = 1 then 0 end  where find_in_set(id,?)>0', [idString]);
}


module.exports = {
  getAll,
  getActives,
  workById,
  editWork,
  activeWork,
  createWork,
  deleteWork
};