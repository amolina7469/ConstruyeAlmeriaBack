
const { getWorkerById, getToolById } = require('../models/parte.model');

const createObject = async (array, table, dailyId) => {
  const obj = [];
  for (let item of array) {
    if (table === "workers") {
      const [result] = await getWorkerById(item, dailyId);
      obj.push(result[0]);
    } else {
      const [result] = await getToolById(item);
      obj.push(result[0]);
    }
  }
  return obj;
}

module.exports = {
  createObject
}