var pgp = require('pg-promise')();
var connection = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/lg_todo`;
var db = pgp(connection);

module.exports = {

  getAllUsers: function(){
    var sql = `
      SELECT
        *
      FROM
        todo_list_items
    `
    return db.any(sql)
  },

  getUserById: function(userId){
    var sql = `
      SELECT
        *
      FROM
        todo_list_items
      WHERE
        id=$1
    `
    var variables = [userId]
    return db.one(sql, variables)
  },

  createTodo: function(attributes){
    var sql = `
      INSERT INTO
        todo_list_items (description)
      VALUES
        ($1)
    `
    var variables = [
      attributes.description,
    ]
    return db.none(sql, variables)
  },

  getTodos: function(){
    var sql = `
      SELECT
        *
      FROM
        todo_list_items
    `
    return db.any(sql)
  },

  deleteTodo: function(todoId){
    var sql = `
      DELETE FROM
        todo_list_items
      WHERE
        id=$1
    `
    var variables = [todoId]
    return db.none(sql, variables)
  },

  completeTodo: function(todoId){
    var sql = `
      UPDATE
        todo_list_items
      SET
        completed=true
      WHERE
        id=$1
    `
    var variables = [todoId]
    return db.none(sql, variables)
  },

  uncompleteTodo: function(todoId){
    var sql = `
      UPDATE
        todo_list_items
      SET
        completed=false
      WHERE
        id=$1
    `
    var variables = [todoId]
    return db.none(sql, variables)
  }
}


