const express = require("express");
const http = require("http");
const fs = require("fs");
const dataObjects = require("./data-country");

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

app.get("/about", (req, res) => {
  res.send({ message: "About Page" }).status(200);
});

app.get("/data", (req, res) => {
  const data = dataObjects;
  let updateData = [...data];
  res.send(updateData).status(200);
  
  // fs.readFile("data.json", "utf-8", (er, docs) => {
  //   if (er) {
  //     res
  //       .send({
  //         message: "No File",
  //       })
  //       .status(400);
  //     return;
  //   }
  //   const data = JSON.parse(docs);
  //   let updateData = [...data];
  //   res.send(updateData).status(200);
  // });
});

// app.use("/api/v1", indexRouter);

const port = 5000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
