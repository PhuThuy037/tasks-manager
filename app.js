const express = require("express");
const app = express();
const connectDb = require("./db/connect");
const tasks = require("./route/tasks");
require("dotenv").config();
const notfound = require("./middleware/notFound");
const errHandle = require("./middleware/errorHandle");
const port = 3000;
// middware
app.use(express.json());
app.use(express.static("./public"));

// route
app.use("/api/v1/tasks", tasks);
app.use(notfound);
app.use(errHandle);
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Sever is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
