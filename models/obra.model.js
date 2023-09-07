const getAll = () => {
  return db.query('select * from works inner join clients on client_id = clients.id ');
}

module.exports = { getAll };