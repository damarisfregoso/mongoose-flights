const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

//shortcut variable
const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to mongoDB ${db.name} at ${db.host}:${db.port}`);
});