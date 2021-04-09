const users = [];
const {EventEmitter} = require('events');
const syncDevice = EventEmitter();
module.exports = { users, syncDevice };
