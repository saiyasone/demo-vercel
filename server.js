const express = require("express");
const http = require("http");
const dataObjects = require("./data-country");
// const fs = require("fs");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send({ message: "Home Page" }).status(200);
});

app.get("/data", (req, res) => {
  const { offset, limit, search } = req.query;
  let offsetNumber = offset || 0;
  let limitNumber = limit;
  // let searchData = search || "";

  let totalNumber = 0;
  const data = dataObjects;
  totalNumber = data.length;
  limitNumber = totalNumber;
  let updateData = data.splice(offsetNumber, limitNumber);

  res
    .send({
      data: updateData,
      totalNumber,
    })
    .status(200);
});

const port = 5000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
