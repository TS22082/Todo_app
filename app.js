var session = require('express-session')
var express = require('express');
var basicAuth = require('basic-auth-connect');
var database = require('./database');

var app = express(); //newest try
app.use(express.static('public')); //newest try

app.set('view engine', 'pug');

app.use(basicAuth(function(user, pass){
  if (user === 'Thomas' && pass === 'de-fen') return true;
  if (user === 'Lindsay' && pass === 'william') return true;
  return false
}));

app.use(session({
  secret: 'utopia',
  name: 'lg_todo',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));


app.get("/", function(req, res){
  database.getTodos()
    .then(todos => {

      var completeTodos   = todos.filter(todo =>  todo.completed)
      var incompleteTodos = todos.filter(todo => !todo.completed)

      res.render('index', {
        username: req.user,
        completeTodos: completeTodos,
        incompleteTodos: incompleteTodos,
      })
    })
    .catch(error => {
      res.render('error', {
        error: error
      })
    })
})

app.get('/todos/:todoId/complete', function(req, res){
  database.completeTodo(req.params.todoId)
    .then(()=>{
      res.redirect('/')
    })
    .catch(error => {
      res.render('error', {
        error: error
      })
    })
})

app.get('/todos/:todoId/uncomplete', function(req, res){
  database.uncompleteTodo(req.params.todoId)
    .then(()=>{
      res.redirect('/')
    })
    .catch(error => {
      res.render('error', {
        error: error
      })
    })
})

app.get('/todos/:todoId/delete', function(req, res){
  database.deleteTodo(req.params.todoId)
    .then(()=>{
      res.redirect('/')
    })
    .catch(error => {
      res.render('error', {
        error: error
      })
    })
})

app.listen(3000);
