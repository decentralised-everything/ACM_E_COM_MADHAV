const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 6969;

app.use(express.json({ extended: false }));

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
