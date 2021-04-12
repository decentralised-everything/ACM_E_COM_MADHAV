const users = [];
const objects = [];
const { EventEmitter } = require("events");
const syncDevice = new EventEmitter();
const db_link =
  "mongodb+srv://madhav:madhav@cluster0.tlg4k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
module.exports = { users, syncDevice, objects, db_link };
