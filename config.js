const users = [];
const objects = [];
const { EventEmitter } = require("events");
const syncDevice = EventEmitter();
module.exports = { users, syncDevice, objects };

