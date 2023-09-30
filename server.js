const express = require("express");
const http = require("http");
const indexRouter = require("./routes/index");

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

app.use("/api/v1", indexRouter);

const port = 5000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
