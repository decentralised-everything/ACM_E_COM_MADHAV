const express = require("express");
const EventEmitter = require("events");

const app = express();
const sync = new EventEmitter();

app.get("/listen", async(req, res) => {
res.write("aight homie...");
  sync.on("hehe", (data) => {
	responses.write(data);
	++j;
});
});

app.get("/emit", async(req, res) => {
  sync.emit("hehe", "oooff");
	res.write("data sent!");
	res.end();
});

app.listen(3000);
