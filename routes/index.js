const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/data", (req, res) => {
  const path = "./data.json";
  if (fs.existsSync(path)) {
    fs.readFile(path, "utf-8", (er, docs) => {
      if (er) throw er;
      const data = JSON.parse(docs);
      let updateData = data.splice(1, 5);
      res.send(updateData).status(200);
    });
  } else {
    console.log("No");
  }
});

module.exports = router;
