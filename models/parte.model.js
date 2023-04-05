const createDaily = ({ person, work, date, vehicle, container }) => {
  return db.query('INSERT INTO daily (user_id, work_id, date, vehicle_id, container_id) VALUES (?, ?, ?, ?, ?)', [person, work, date, vehicle, container]);
}
const addTools = (toolId, dailyId) => {
  return db.query('INSERT INTO daily_has_tools (tool_id, daily_id) VALUES (?, ?)', [toolId, dailyId]);
}
const getLastDailys = ({ fechaInicio, fechaFin }) => {
  return db.query('select date, daily.id, works.address, clients.name, clients.surname from daily inner join works on work_id = works.id inner join clients on client_id= clients.id where date BETWEEN ? AND ?', [fechaInicio, fechaFin]);
};

// const getLastDailys = ({ fechaInicio, fechaFin }) => {
//   return db.query('select date, daily.id, works.address, clients.name, clients.surname, tools.name, tools.price from daily inner join works on work_id = works.id inner join clients on client_id = clients.id inner join daily_has_tools on daily.id = daily_has_tools.daily_id inner join tools on tools.id = tool_id where date BETWEEN ? AND ? ', [fechaInicio, fechaFin]);
// };



module.exports = {
  createDaily,
  addTools,
  getLastDailys
}