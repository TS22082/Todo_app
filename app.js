var session = require('express-session')
var express = require('express');
var database = require('./database');

var app = express()

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session({
  secret: 'utopia',
  name: 'lg_todo',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));


app.get("/users/:userId", function(req, res){
  database.getUserById(req.params.userId)
    .then(function(user) {
      res.send('query good '+
        JSON.stringify(user, null, 4)
      )
    })
    .catch(function(error) {
      res.send('query bad '+error)
    });

})


app.listen(3000);
