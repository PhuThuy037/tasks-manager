const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./route/tasks");
// middware
app.use(express.json());

// route
app.get("/hello", (req, res) => {
  return res.send("Task manager");
});

app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log(`Sever is listening on port ${port}...`);
});
