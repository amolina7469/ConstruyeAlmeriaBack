const createDaily = ({ person, work, date, vehicle, container }) => {
  return db.query('INSERT INTO daily (user_id, work_id, date, vehicle_id, container_id) VALUES (?, ?, ?, ?, ?)', [person, work, date, vehicle, container]);
}
const addTools = (toolId, dailyId) => {
  return db.query('INSERT INTO daily_has_tools (tool_id, daily_id) VALUES (?, ?)', [toolId, dailyId]);
}
const addWorkers = (workerId, dailyId, workdayId) => {
  return db.query('INSERT INTO daily_has_workers (worker_id, daily_id, workdays_id) VALUES (?, ?,?)', [workerId, dailyId, workdayId]);
}
const getLastDailys = ({ fechaInicio, fechaFin }) => {
  return db.query('select date, daily.id, works.address, clients.name, clients.surname from daily inner join works on work_id = works.id inner join clients on client_id= clients.id where date BETWEEN ? AND ? order by daily.id', [fechaInicio, fechaFin]);
};
const getDailyById = (dailyId) => {
  return db.query('select date, daily.id, works.address, works.km, works.pricekm, clients.name, clients.surname,containers.type as container, vehicles.brand, vehicles.registration, vehicles.model, vehicles.description, group_concat(distinct tool_id) as tools, group_concat(distinct worker_id) as workers from daily inner join works on work_id = works.id inner join clients on client_id = clients.id  inner join vehicles on vehicle_id = vehicles.id inner join daily_has_tools on daily.id = daily_has_tools.daily_id inner join daily_has_workers on daily.id = daily_has_workers.daily_id inner join containers on container_id = containers.id where daily.id = ? group by id; ', [dailyId]);
}
const getToolById = (toolId) => {
  return db.query('select * from tools where tools.id =?', [toolId]);
}
const getWorkerById = (workerId, dailyId) => {
  return db.query('select name, surname, workdays_id as jornada from workers inner join daily_has_workers on workers.id = worker_id where workers.id = ? and daily_id = ?', [workerId, dailyId]);
}
const getWorkdayById = (workdayId) => {
  return db.query('select day from workdays where workdays.id=?', [workdayId]);
}
const deleteById = (id) => {
  return db.query('delete from daily where id = ?', [id])
}

const getFilterWorks = ({ fechaInicio, fechaFin, filtro }) => {
  return db.query('select date, daily.id, works.address, clients.name, clients.surname from daily inner join works on work_id = works.id inner join clients on client_id= clients.id where works.id = ? and date BETWEEN ? AND ? order by daily.id', [filtro, fechaInicio, fechaFin]);
};

const getFilterClients = ({ fechaInicio, fechaFin, filtro }) => {
  return db.query('select date, daily.id, works.address, clients.name, clients.surname from daily inner join works on work_id = works.id inner join clients on client_id= clients.id where clients.id = ? and date BETWEEN ? AND ? order by daily.id', [filtro, fechaInicio, fechaFin]);
};

module.exports = {
  createDaily,
  addTools,
  addWorkers,
  getDailyById,
  getToolById,
  getWorkerById,
  getWorkdayById,
  getLastDailys,
  deleteById,
  getFilterWorks,
  getFilterClients
}