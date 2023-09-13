const getAll = () => {
  return db.query('select works.id, address,client_id,km,pricekm,works.isActivated,name,surname,email from works inner join clients on clients.id = client_id where works.isActivated = 1');
}

const createWork = ({ address, client }) => {
  return db.query('insert into works (address,client_id) values (?,?)', [address, client]);
}

const deleteWork = ({ id }) => {
  return db.query('update construye.works set works.isActivated = 0 where id=?', [id])
}


module.exports = {
  getAll,
  createWork,
  deleteWork
};