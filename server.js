const express = require("express");
const http = require("http");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send({ message: "Home" }).status(200);
});
app.get("/data", (req, res) => {
  const path = "./data.json";
  if (fs.existsSync(path)) {
    fs.readFile(path, "utf-8", (er, docs) => {
      if (er) throw er;
      const data = JSON.parse(docs);
      res.send(data).status(200);
    });
  }
});

const port = 5000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
