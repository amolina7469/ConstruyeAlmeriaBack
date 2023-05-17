const createDaily = ({ person, work, date, vehicle, container }) => {
  return db.query('INSERT INTO daily (user_id, work_id, date, vehicle_id, container_id) VALUES (?, ?, ?, ?, ?)', [person, work, date, vehicle, container]);
}
const addTools = (toolId, dailyId) => {
  return db.query('INSERT INTO daily_has_tools (tool_id, daily_id) VALUES (?, ?)', [toolId, dailyId]);
}
const addWorkers = (workerId, dailyId, workdayId) => {
  return db.query('INSERT INTO daily_has_workers (worker_id, daily_id, workday_id) VALUES (?, ?)', [workerId, dailyId, workdayId]);
}
// const addWorkday = (workerId, workdayId) => {
//   return db.query('INSERT INTO workdays_has_workers (worker_id, workday_id) VALUES (?, ?)', [workerId, workdayId]);
// }
const getLastDailys = ({ fechaInicio, fechaFin }) => {
  return db.query('select date, daily.id, works.address, clients.name, clients.surname from daily inner join works on work_id = works.id inner join clients on client_id= clients.id where date BETWEEN ? AND ?', [fechaInicio, fechaFin]);
};

const getDailyById = (dailyId) => {
  return db.query('select * from  daily where id = ?', [dailyId]);
}
// const getLastDailys = ({ fechaInicio, fechaFin }) => {
//   return db.query('select date, daily.id, works.address, clients.name, clients.surname, tools.name, tools.price from daily inner join works on work_id = works.id inner join clients on client_id = clients.id inner join daily_has_tools on daily.id = daily_has_tools.daily_id inner join tools on tools.id = tool_id where date BETWEEN ? AND ? ', [fechaInicio, fechaFin]);
// };



module.exports = {
  createDaily,
  addTools,
  addWorkers,
  getDailyById,
  // addWorkday,
  getLastDailys
}