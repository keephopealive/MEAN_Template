var express = require('express')
var app = express()
var server = app.listen(1337)

// Sockets
io = require('socket.io').listen(server)

// Body Parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())

// Session
var session = require('express-session')
app.use(session({
  secret: 'encryption key',
  resave: false,
  saveUninitialized: true
}))


app.use(express.static(__dirname + '/client'))

// Mongoose
// require('./server/config/mongoose.js');
// SQL
// require('./server/config/sql.js');
// HTTP Routes`	
// require('./server/config/routes.js')(app);
// Socket Routes
// require('./server/config/socket.routes.js')(app);



