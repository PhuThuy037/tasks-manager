const getAllTask = (req, res) => {
  res.send("get All tasks");
};
const creatTask = (req, res) => {
  res.send("create task");
};
const updateTask = (req, res) => {
  res.send("cupdate task");
};
const getTask = (req, res) => {
  res.send("get Single task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = { getAllTask, getTask, creatTask, updateTask, deleteTask };
