const express = require("express");
const http = require("http");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/api/v1/", (req, res) => {
  res.send({ message: "Home" }).status(200);
});

const port = 5000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
